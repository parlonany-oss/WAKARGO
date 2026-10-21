import { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'

const tabs = ['General Import', 'Agro Export', 'Ship Abroad']

const SEA_RATES = {
  import: {
    'General Cargo / Others': 120,
    'Buses / Van':            160,
    'Cars':                   180,
    'Trucks / Trailers':      240,
    'Heavy Duty Equipment':   260,
    'Tyres':                  140,
  },
  agro: {
    'Ginger': 115, 'Sesame Seed': 110, 'Cotton': 108,
    'Cocoa': 120, 'Cashew': 118, 'Palm Oil': 125,
    'Yam': 112, 'General Agro': 110,
  },
  abroad: 118,
}

const AIR_RATES = {
  import: {
    express:  { 'General Cargo / Others': 8,  'Buses / Van': 11, 'Cars': 12, 'Trucks / Trailers': 16, 'Heavy Duty Equipment': 16, 'Tyres': 9 },
    standard: { 'General Cargo / Others': 6,  'Buses / Van': 8,  'Cars': 9,  'Trucks / Trailers': 12, 'Heavy Duty Equipment': 12, 'Tyres': 7 },
    economy:  { 'General Cargo / Others': 4,  'Buses / Van': 6,  'Cars': 6,  'Trucks / Trailers': 9,  'Heavy Duty Equipment': 9,  'Tyres': 5 },
  },
  agro: {
    express:  { 'Ginger': 7, 'Sesame Seed': 7, 'Cotton': 6, 'Cocoa': 7, 'Cashew': 7, 'Palm Oil': 8, 'Yam': 7, 'General Agro': 6 },
    standard: { 'Ginger': 5, 'Sesame Seed': 5, 'Cotton': 4, 'Cocoa': 5, 'Cashew': 5, 'Palm Oil': 6, 'Yam': 5, 'General Agro': 4 },
    economy:  { 'Ginger': 3, 'Sesame Seed': 3, 'Cotton': 3, 'Cocoa': 4, 'Cashew': 4, 'Palm Oil': 4, 'Yam': 3, 'General Agro': 3 },
  },
  abroad: { express: 9, standard: 6, economy: 4 },
}

const AIR_TIERS = [
  { key: 'express',  label: '3–4 Days',   tag: 'Express'  },
  { key: 'standard', label: '5–7 Days',   tag: 'Standard' },
  { key: 'economy',  label: '10–16 Days', tag: 'Economy'  },
]

const CARGO_TYPES   = ['General Cargo / Others', 'Buses / Van', 'Cars', 'Trucks / Trailers', 'Heavy Duty Equipment', 'Tyres']
const AGRO_PRODUCTS = ['Ginger', 'Sesame Seed', 'Cotton', 'Cocoa', 'Cashew', 'Palm Oil', 'Yam', 'General Agro']
const ABROAD_ITEMS  = ['Foodstuffs', 'Clothing & Fabrics', 'Electronics', 'Household Items', 'Mixed / Others']

const CARGO_PLACEHOLDERS = {
  'General Cargo / Others': 'e.g. Industrial spare parts, machinery components…',
  'Buses / Van':            'e.g. 2022 Toyota Hiace, 18-seater, petrol',
  'Cars':                   'e.g. 2023 Toyota Camry, right-hand drive, petrol',
  'Trucks / Trailers':      'e.g. 2020 Mack Truck, 40-tonne capacity',
  'Heavy Duty Equipment':   'e.g. Caterpillar excavator, model 320, diesel',
  'Tyres':                  'e.g. 22.5" truck tyres, set of 20',
}
const AGRO_PLACEHOLDERS = {
  'Ginger': 'e.g. Dried split ginger, 50kg bags',
  'Sesame Seed': 'e.g. Natural white sesame seed, 25kg bags',
  'Cotton': 'e.g. Raw seed cotton bales',
  'Cocoa': 'e.g. Fermented dried cocoa beans, 62.5kg bags',
  'Cashew': 'e.g. Raw cashew nuts (RCN), 80kg bags',
  'Palm Oil': 'e.g. Crude palm oil, IBC tanks',
  'Yam': 'e.g. Puna yam, crated, 30kg per crate',
  'General Agro': 'e.g. Moringa leaves, hibiscus flowers, soya beans…',
}
const ABROAD_PLACEHOLDERS = {
  'Foodstuffs': 'e.g. Stockfish, crayfish, egusi, ground crayfish…',
  'Clothing & Fabrics': 'e.g. Ankara fabrics, traditional attire, used clothing',
  'Electronics': 'e.g. Laptops, phones, accessories',
  'Household Items': 'e.g. Kitchen utensils, bedding, personal effects',
  'Mixed / Others': 'e.g. Mix of foodstuffs and fabrics for family abroad',
}

const newRow = () => ({
  id: Date.now(),
  qty: '', length: '', width: '', height: '', weight: '',
  dimUnit: 'CM', weightUnit: 'KG',
})

// Unit conversions — everything converts to CM and KG for calculation
const toCm = (val, unit) => unit === 'IN' ? val * 2.54 : val
const toKg = (val, unit) => unit === 'LB' ? val * 0.453592 : val

const blankState = {
  mode: 'Sea', tier: 'standard',
  cargoType: 'General Cargo / Others',
  product: 'Ginger',
  item: 'Foodstuffs',
  description: '',
  rows: [newRow()],
  // air-only single fields
  airWeight: '',
  airLength: '', airWidth: '', airHeight: '',
}

export default function Calculator() {
  const [activeTab, setActiveTab] = useState(0)
  const [imp,    setImp]    = useState({ ...blankState })
  const [agro,   setAgro]   = useState({ ...blankState, product: 'Ginger', rows: [newRow()] })
  const [abroad, setAbroad] = useState({ ...blankState, item: 'Foodstuffs', rows: [newRow()] })
  const [impRes,    setImpRes]    = useState(null)
  const [agroRes,   setAgroRes]   = useState(null)
  const [abroadRes, setAbroadRes] = useState(null)

  // ── Row helpers ──────────────────────────────────────────────────
  const addRow    = (setState) => setState(s => ({ ...s, rows: [...s.rows, newRow()] }))
  const removeRow = (setState, id) => setState(s => ({ ...s, rows: s.rows.filter(r => r.id !== id) }))
  const updateRow = (setState, id, field, val) =>
    setState(s => ({ ...s, rows: s.rows.map(r => r.id === id ? { ...r, [field]: val } : r) }))

  // ── Calculation ──────────────────────────────────────────────────
  function calculate(state, category, setResult) {
    const productKey = state.cargoType || state.product

    if (state.mode === 'Sea') {
      // Validate at least one complete row
      const complete = state.rows.filter(r =>
        parseFloat(r.length) > 0 && parseFloat(r.width) > 0 &&
        parseFloat(r.height) > 0 && parseFloat(r.weight) > 0
      )
      if (!complete.length) return alert('Fill in at least one row with dimensions and weight.')

      const rowResults = complete.map(r => {
  const qty = parseInt(r.qty) || 1
  const l = toCm(parseFloat(r.length), r.dimUnit)
  const w = toCm(parseFloat(r.width),  r.dimUnit)
  const h = toCm(parseFloat(r.height), r.dimUnit)
  const wKg = toKg(parseFloat(r.weight), r.weightUnit)
  const cbmPerUnit = (l * w * h) / 1_000_000
  const totalCbm = cbmPerUnit * qty
  const totalWeight = wKg * qty
  return { qty, cbmPerUnit, totalCbm, totalWeight }
})

      const grandCbm    = rowResults.reduce((sum, r) => sum + r.totalCbm, 0)
      const grandWeight = rowResults.reduce((sum, r) => sum + r.totalWeight, 0)

      // LCL: 1 CBM = 1000 kg. Convert weight to CBM equivalent, charge the greater
      const weightAsCbm = grandWeight / 1000
      const chargeableCbm = Math.max(grandCbm, weightAsCbm)
      const usedWeight = weightAsCbm > grandCbm

      const rate = category === 'abroad' ? SEA_RATES.abroad : SEA_RATES[category][productKey]

      setResult({
        mode: 'Sea',
        rowResults, grandCbm: grandCbm.toFixed(3),
        grandWeight: grandWeight.toFixed(1),
        weightAsCbm: weightAsCbm.toFixed(3),
        chargeableCbm: chargeableCbm.toFixed(3),
        usedWeight,
        estimate: (chargeableCbm * rate).toFixed(2),
        rate, duration: '35+ days',
      })

    } else {
      // Air
      const actualKg = parseFloat(state.airWeight)
      if (!actualKg || actualKg <= 0) return alert('Enter total weight (kg) for Air freight.')

      const L = parseFloat(state.airLength)
      const W = parseFloat(state.airWidth)
      const H = parseFloat(state.airHeight)
      const hasDims = L > 0 && W > 0 && H > 0
      const volKg = hasDims ? (L * W * H) / 5_000 : null
      const chargeKg = volKg ? Math.max(actualKg, volKg) : actualKg
      const usedVol = volKg && volKg > actualKg

      const rate = category === 'abroad'
        ? AIR_RATES.abroad[state.tier]
        : AIR_RATES[category][state.tier][productKey]
      const tier = AIR_TIERS.find(t => t.key === state.tier)

      setResult({
        mode: 'Air', tier: state.tier, tierTag: tier.tag,
        actualKg: actualKg.toFixed(1),
        volKg: volKg ? volKg.toFixed(1) : null,
        chargeKg: chargeKg.toFixed(1),
        usedVol,
        estimate: (chargeKg * rate).toFixed(2),
        rate, unit: 'kg', duration: tier.label,
      })
    }
  }

  // ── Shared UI ────────────────────────────────────────────────────
  const inputCls = "w-full border border-border rounded-lg px-3 py-2.5 text-sm font-body focus:outline-none focus:border-brand transition-colors bg-white"
  const lbl = txt => <label className="block text-sm font-display font-medium text-gray-700 mb-1.5">{txt}</label>

  const ModeSelector = ({ state, setState }) => (
    <div>
      {lbl('Shipping Mode')}
      <div className="grid grid-cols-2 gap-3">
        {[
          ['Sea', '🚢 Sea Freight', 'Rate per CBM · 35+ days'],
          ['Air', '✈️ Air Freight', 'Rate per chargeable kg'],
        ].map(([m, label, sub]) => (
          <button key={m} type="button"
            onClick={() => setState(p => ({ ...p, mode: m }))}
            className={`py-3 px-4 rounded-lg border text-left transition-colors
              ${state.mode === m ? 'bg-brand text-white border-brand' : 'bg-white text-gray-700 border-border hover:border-brand/40'}`}>
            <p className={`text-sm font-display font-semibold ${state.mode === m ? 'text-white' : ''}`}>{label}</p>
            <p className={`text-xs mt-0.5 ${state.mode === m ? 'text-white/70' : 'text-gray-400'}`}>{sub}</p>
          </button>
        ))}
      </div>
    </div>
  )

  const TierSelector = ({ state, setState }) => state.mode !== 'Air' ? null : (
    <div>
      {lbl('Delivery Speed')}
      <div className="grid grid-cols-3 gap-2">
        {AIR_TIERS.map(({ key, label, tag }) => (
          <button key={key} type="button"
            onClick={() => setState(p => ({ ...p, tier: key }))}
            className={`py-2.5 px-3 rounded-lg border text-center transition-colors
              ${state.tier === key ? 'bg-brand/10 border-brand text-brand' : 'bg-white border-border text-gray-600 hover:border-brand/30'}`}>
            <p className="text-xs font-display font-semibold">{tag}</p>
            <p className="text-xs text-gray-400 mt-0.5">{label}</p>
          </button>
        ))}
      </div>
    </div>
  )

const UnitRows = ({ state, setState }) => state.mode !== 'Sea' ? null : (
  <div className="space-y-3">
    {state.rows.map((row, idx) => (
      <div key={row.id} className="border border-border rounded-xl p-4 space-y-3 bg-white">
        <div className="flex items-center justify-between">
          <span className="text-xs font-display font-semibold text-gray-400 uppercase tracking-wide">
            Unit {idx + 1}
          </span>
          {state.rows.length > 1 && (
            <button onClick={() => removeRow(setState, row.id)}
              className="text-xs text-gray-400 hover:text-red-500 transition-colors flex items-center gap-1">
              <Trash2 size={12} /> Remove
            </button>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5"># of units</label>
          <input type="number" min="1" placeholder="1" className={inputCls}
            value={row.qty} onChange={e => updateRow(setState, row.id, 'qty', e.target.value)} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Dimensions <span className="text-gray-400 font-normal">(L×W×H per unit)</span>
          </label>
          <div className="flex rounded-lg border border-border overflow-hidden focus-within:border-brand transition-colors">
            {['length','width','height'].map((field, i) => (
              <input key={field} type="number" placeholder={['L','W','H'][i]}
                className="flex-1 min-w-0 px-3 py-2.5 text-sm font-body focus:outline-none bg-white border-r border-border"
                value={row[field]} onChange={e => updateRow(setState, row.id, field, e.target.value)} />
            ))}
            <div className="relative">
              <select value={row.dimUnit}
                onChange={e => updateRow(setState, row.id, 'dimUnit', e.target.value)}
                className="h-full pl-3 pr-7 text-sm font-display font-medium text-gray-500 bg-gray-50 border-l border-border focus:outline-none appearance-none cursor-pointer">
                <option>CM</option>
                <option>IN</option>
              </select>
              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Weight <span className="text-gray-400 font-normal">(per unit)</span>
          </label>
          <div className="flex rounded-lg border border-border overflow-hidden focus-within:border-brand transition-colors">
            <input type="number" placeholder="W"
              className="flex-1 px-3 py-2.5 text-sm font-body focus:outline-none bg-white"
              value={row.weight} onChange={e => updateRow(setState, row.id, 'weight', e.target.value)} />
            <div className="relative">
              <select value={row.weightUnit}
                onChange={e => updateRow(setState, row.id, 'weightUnit', e.target.value)}
                className="h-full pl-3 pr-7 text-sm font-display font-medium text-gray-500 bg-gray-50 border-l border-border focus:outline-none appearance-none cursor-pointer">
                <option>KG</option>
                <option>LB</option>
              </select>
              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
            </div>
          </div>
        </div>
      </div>
    ))}

    <button onClick={() => addRow(setState)}
      className="flex items-center gap-1.5 text-sm text-brand hover:text-brand-dark font-display font-medium transition-colors">
      <Plus size={15} /> Add another unit
    </button>
    <p className="text-xs text-gray-400">
      In LCL, chargeable CBM = greater of actual volume or weight ÷ 1000.
    </p>
  </div>
)

  // Air fields (single set — total shipment)
  const AirFields = ({ state, setState }) => state.mode !== 'Air' ? null : (
    <div className="space-y-4">
      <div>
        {lbl('Total Weight (kg)')}
        <input type="number" placeholder="e.g. 500" className={inputCls}
          value={state.airWeight} onChange={e => setState(s => ({ ...s, airWeight: e.target.value }))} />
      </div>
      <div>
        {lbl('Total Shipment Dimensions (cm) — optional, enables volumetric check')}
        <div className="grid grid-cols-3 gap-3">
          {[['airLength','Length','240'],['airWidth','Width','120'],['airHeight','Height','180']].map(([k, ph, eg]) => (
            <div key={k}>
              <p className="text-xs text-gray-400 mb-1">{ph}</p>
              <input type="number" placeholder={eg} className={inputCls}
                value={state[k]} onChange={e => setState(s => ({ ...s, [k]: e.target.value }))} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const ResultCard = ({ r }) => !r ? null : (
    <div className="rounded-xl border border-border overflow-hidden">
      <div className={`px-5 py-3 flex items-center justify-between ${r.mode === 'Sea' ? 'bg-brand' : 'bg-accent'}`}>
        <div>
          <p className="text-white font-display font-semibold text-sm">
            {r.mode === 'Sea' ? '🚢 Sea Freight' : `✈️ Air Freight — ${r.tierTag}`}
          </p>
          <p className="text-white/70 text-xs mt-0.5">Est. {r.duration}</p>
        </div>
        <div className="text-right">
          <p className="text-white/70 text-xs">Estimated Cost</p>
          <p className="text-white font-display font-bold text-2xl">${r.estimate}</p>
        </div>
      </div>
      <div className="bg-offwhite px-5 py-4 space-y-2 text-sm">
        {r.mode === 'Sea' && <>
          {r.rowResults.length > 1 && r.rowResults.map((row, i) => (
            <div key={i} className="flex justify-between text-gray-500">
              <span>Row {i + 1}: {row.qty} unit{row.qty > 1 ? 's' : ''}</span>
              <span>{row.totalCbm.toFixed(3)} CBM · {row.totalWeight.toFixed(1)} kg</span>
            </div>
          ))}
          <div className="flex justify-between border-t border-border pt-2">
            <span className="text-gray-500">Total Volume</span>
            <span className="font-semibold">{r.grandCbm} CBM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Total Weight</span>
            <span className="font-semibold">{r.grandWeight} kg ({r.weightAsCbm} CBM equiv.)</span>
          </div>
          <div className={`flex justify-between border-t border-border pt-2 ${r.usedWeight ? 'text-amber-600' : ''}`}>
            <span className={r.usedWeight ? 'text-amber-600' : 'text-gray-500'}>Chargeable CBM</span>
            <span className="font-semibold">
              {r.chargeableCbm} CBM {r.usedWeight && <span className="text-xs font-normal">(weight-based)</span>}
            </span>
          </div>
        </>}
        {r.mode === 'Air' && <>
          <div className="flex justify-between">
            <span className="text-gray-500">Actual Weight</span>
            <span className="font-semibold">{r.actualKg} kg</span>
          </div>
          {r.volKg && (
            <div className="flex justify-between">
              <span className="text-gray-500">Volumetric Weight</span>
              <span className={`font-semibold ${r.usedVol ? 'text-amber-600' : ''}`}>{r.volKg} kg</span>
            </div>
          )}
          <div className="flex justify-between border-t border-border pt-2">
            <span className="text-gray-500">Chargeable Weight</span>
            <span className="font-semibold text-brand">
              {r.chargeKg} kg {r.usedVol && <span className="text-xs text-amber-600 font-normal">(volumetric applies)</span>}
            </span>
          </div>
        </>}
        <div className="flex justify-between">
          <span className="text-gray-500">Rate</span>
          <span className="font-semibold">${r.rate} / {r.mode === 'Sea' ? 'CBM' : 'kg'}</span>
        </div>
        <p className="text-xs text-gray-400 border-t border-border pt-3 leading-relaxed">
          Ballpark estimate only. Final charges depend on confirmed dimensions, port fees & destination. Confirmed quote by our team.
        </p>
      </div>
    </div>
  )

  const DescField = ({ state, setState, placeholder }) => (
    <div>
      {lbl('Description / Specification')}
      <input type="text" placeholder={placeholder} className={inputCls}
        value={state.description} onChange={e => setState(s => ({ ...s, description: e.target.value }))} />
    </div>
  )

  // ── Tabs ─────────────────────────────────────────────────────────
  const ImportTab = () => (
    <div className="space-y-5">
      <div>
        {lbl('Cargo Type')}
        <select className={inputCls} value={imp.cargoType}
          onChange={e => setImp(p => ({ ...p, cargoType: e.target.value, description: '' }))}>
          {CARGO_TYPES.map(c => <option key={c}>{c}</option>)}
        </select>
      </div>
      <DescField state={imp} setState={setImp} placeholder={CARGO_PLACEHOLDERS[imp.cargoType]} />
      <ModeSelector state={imp} setState={setImp} />
      <TierSelector state={imp} setState={setImp} />
      <UnitRows state={imp} setState={setImp} />
      <AirFields state={imp} setState={setImp} />
      <button onClick={() => calculate(imp, 'import', setImpRes)}
        className="w-full bg-brand hover:bg-brand-dark text-white font-display font-semibold py-3 rounded-lg transition-colors">
        Calculate Estimate
      </button>
      <ResultCard r={impRes} />
    </div>
  )

  const AgroTab = () => (
    <div className="space-y-5">
      <div>
        {lbl('Product')}
        <select className={inputCls} value={agro.product}
          onChange={e => setAgro(p => ({ ...p, product: e.target.value, description: '' }))}>
          {AGRO_PRODUCTS.map(a => <option key={a}>{a}</option>)}
        </select>
      </div>
      <DescField state={agro} setState={setAgro} placeholder={AGRO_PLACEHOLDERS[agro.product]} />
      <ModeSelector state={agro} setState={setAgro} />
      <TierSelector state={agro} setState={setAgro} />
      <UnitRows state={agro} setState={setAgro} />
      <AirFields state={agro} setState={setAgro} />
      <button onClick={() => calculate(agro, 'agro', setAgroRes)}
        className="w-full bg-brand hover:bg-brand-dark text-white font-display font-semibold py-3 rounded-lg transition-colors">
        Calculate Estimate
      </button>
      <ResultCard r={agroRes} />
    </div>
  )

  const AbroadTab = () => (
    <div className="space-y-5">
      <div>
        {lbl('Item Type')}
        <select className={inputCls} value={abroad.item}
          onChange={e => setAbroad(p => ({ ...p, item: e.target.value, description: '' }))}>
          {ABROAD_ITEMS.map(a => <option key={a}>{a}</option>)}
        </select>
        <p className="text-xs text-gray-400 mt-1">Foodstuffs includes stockfish, crayfish, egusi & similar items.</p>
      </div>
      <DescField state={abroad} setState={setAbroad} placeholder={ABROAD_PLACEHOLDERS[abroad.item]} />
      <ModeSelector state={abroad} setState={setAbroad} />
      <TierSelector state={abroad} setState={setAbroad} />
      <UnitRows state={abroad} setState={setAbroad} />
      <AirFields state={abroad} setState={setAbroad} />
      <button onClick={() => calculate(abroad, 'abroad', setAbroadRes)}
        className="w-full bg-brand hover:bg-brand-dark text-white font-display font-semibold py-3 rounded-lg transition-colors">
        Calculate Estimate
      </button>
      <ResultCard r={abroadRes} />
    </div>
  )

  return (
    <section id="calculator" className="py-20 bg-offwhite">
      <div className="container-pad">
        <div className="max-w-xl mb-12">
          <p className="text-accent font-display font-semibold text-sm uppercase tracking-widest mb-3">Estimate Your Costs</p>
          <h2 className="font-display font-bold text-gray-900 leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
            Shipping Rates Calculator
          </h2>
          <p className="text-gray-500 font-body text-base leading-relaxed">
            Sea freight is priced per CBM. Air freight is priced per chargeable kg — whichever is greater between actual and volumetric weight.
          </p>
        </div>

        <div className="max-w-2xl bg-white rounded-2xl border border-border p-8 shadow-sm">
          <div className="flex gap-1 bg-offwhite p-1 rounded-xl mb-8 border border-border">
            {tabs.map((tab, i) => (
              <button key={tab} onClick={() => setActiveTab(i)}
                className={`flex-1 py-2.5 px-2 rounded-lg text-xs font-display font-semibold transition-all
                  ${activeTab === i ? 'bg-white text-brand shadow-sm border border-border' : 'text-gray-400 hover:text-gray-600'}`}>
                {tab}
              </button>
            ))}
          </div>
          {activeTab === 0 && <ImportTab />}
          {activeTab === 1 && <AgroTab />}
          {activeTab === 2 && <AbroadTab />}
        </div>
      </div>
    </section>
  )
}