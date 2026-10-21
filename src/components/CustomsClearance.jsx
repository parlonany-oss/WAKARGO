import { useState } from 'react'
import { ChevronDown, AlertCircle, CheckCircle2, Info } from 'lucide-react'

// ─── RATES ────────────────────────────────────────────────────────────────────
// DTY: Import Duty — Used: 5% of CIF | New: 10% of CIF
// SUR: NAC Levy    — Used: 7% of CIF | New: 10% of CIF
// ETL: CISS        — 0.5% of CIF
// FCS: FOB Levy    — 4% of FOB (FOB ≈ CIF × 0.72)
// VAT              — 7.5% of (CIF + DTY + SUR)
// GREEN TAX        — New only: 2% (2000–3999cc), 4% (4000cc+), 0% EV

// Port & clearing costs below already include WAKARGO coordination fee (not shown to visitor)
const RUNNING_COSTS = {
  'Saloon Car':         1_350_000,
  'SUV / Crossover':    1_450_000,
  'Van / Bus':          1_600_000,
  'Truck / Trailer':    1_970_000,
  'Heavy Equipment':    2_500_000,
  'Tricycle / Others':    500_000,
}

const VEHICLE_CLASSES = Object.keys(RUNNING_COSTS)

const ENGINE_OPTIONS = [
  { label: 'Under 2,000cc',    value: 'under2000'  },
  { label: '2,000 – 3,999cc', value: '2000to3999' },
  { label: '4,000cc and above', value: 'above4000' },
  { label: 'Electric / EV',    value: 'ev'         },
]

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const fmt = n => '₦' + Math.round(n).toLocaleString('en-NG')

const inputCls =
  'w-full px-4 py-3 rounded-xl border border-border bg-white text-sm font-body ' +
  'text-gray-800 focus:outline-none focus:border-brand transition-colors placeholder-gray-400'

const selectCls =
  'w-full px-4 py-3 rounded-xl border border-border bg-white text-sm font-body ' +
  'text-gray-800 focus:outline-none focus:border-brand transition-colors appearance-none cursor-pointer'

function SelectWrapper({ children }) {
  return (
    <div className="relative">
      {children}
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
    </div>
  )
}

function Field({ label, hint, children }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-display font-semibold text-gray-700">
        {label}
        {hint && <span className="ml-1.5 text-xs font-normal text-gray-400">{hint}</span>}
      </label>
      {children}
    </div>
  )
}

function LineItem({ label, amount, sub, muted }) {
  return (
    <div className="flex items-start justify-between py-2.5 border-b border-border last:border-0">
      <div>
        <span className={`text-sm font-body ${muted ? 'text-gray-400' : 'text-gray-700'}`}>{label}</span>
        {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
      </div>
      <span className={`text-sm font-display tabular-nums ml-4 shrink-0 ${muted ? 'text-gray-400' : 'text-gray-800'}`}>
        {amount}
      </span>
    </div>
  )
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function CustomsClearance() {
  const [form, setForm] = useState({
    vehicleClass:  '',
    condition:     'used',
    cifUsd:        '',
    exchangeRate:  '1600',
    engineSize:    'under2000',
    showBreakdown: false,
  })
  const [result, setResult] = useState(null)

  const set = (key, val) => setForm(f => ({ ...f, [key]: val }))

  function calculate() {
    const cifUsd = parseFloat(form.cifUsd)
    const rate   = parseFloat(form.exchangeRate)
    const isNew  = form.condition === 'new'
    const engine = form.engineSize

    if (!cifUsd || !rate || !form.vehicleClass) return

    const cifNgn = cifUsd * rate
    const fobNgn = cifNgn * 0.72   // FOB ≈ 72% of CIF

    const dty = cifNgn * (isNew ? 0.10 : 0.05)
    const sur = cifNgn * (isNew ? 0.10 : 0.07)
    const etl = cifNgn * 0.005
    const fcs = fobNgn * 0.04

    let greenTax = 0
    if (isNew && engine !== 'ev') {
      if (engine === '2000to3999') greenTax = cifNgn * 0.02
      if (engine === 'above4000')  greenTax = cifNgn * 0.04
    }

    const vat        = (cifNgn + dty + sur + greenTax) * 0.075
    const totalDuty  = dty + sur + etl + fcs + greenTax + vat
    const running    = RUNNING_COSTS[form.vehicleClass] || 1_400_000
    const grandTotal = totalDuty + running

    setResult({ cifNgn, fobNgn, dty, sur, etl, fcs, greenTax, vat, totalDuty, running, grandTotal, isNew, engine })
  }

  const canCalc = form.vehicleClass && form.cifUsd && form.exchangeRate

  return (
    <div className="min-h-screen bg-off-white">

      {/* ── Hero ── */}

      <div
        className="relative text-white py-16 px-6"
        style={{
          backgroundImage: 'url(/Images/roro-vessel.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        {/* Dark brand overlay */}
        <div className="absolute inset-0 bg-brand/80" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-display font-semibold tracking-widest uppercase text-accent mb-4">
            Customs Clearance
          </span>
          <h1 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-4">
            Vehicle Import Duty Estimator
          </h1>
          <p className="text-white/75 font-body text-base max-w-xl mx-auto">
            Get a realistic estimate of what it costs to clear your vehicle through Nigerian Customs — based on current NCS rates and real clearing data.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12 space-y-8">

        {/* ── Notice banner ── */}
        <div className="flex gap-3 bg-accent/10 border border-accent/30 rounded-xl p-4">
          <Info size={18} className="text-accent mt-0.5 shrink-0" />
          <p className="text-sm font-body text-gray-700 leading-relaxed">
            Estimates are based on NCS 2026 rates. Final duty is subject to official NCS valuation, which may differ from your invoice value. Exchange rate is locked at your Form M date.
          </p>
        </div>

        {/* ── Form card ── */}
        <div className="bg-white rounded-2xl border border-border p-6 md:p-8 space-y-6 shadow-sm">
          <h2 className="text-lg font-display font-bold text-gray-900">Vehicle Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <Field label="Vehicle Class">
              <SelectWrapper>
                <select className={selectCls} value={form.vehicleClass}
                  onChange={e => set('vehicleClass', e.target.value)}>
                  <option value="">Select vehicle class</option>
                  {VEHICLE_CLASSES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </SelectWrapper>
            </Field>

            <Field label="Vehicle Condition">
              <div className="flex rounded-xl border border-border overflow-hidden">
                {[['used', 'Used / Tokunbo'], ['new', 'Brand New']].map(([val, label]) => (
                  <button key={val} onClick={() => set('condition', val)}
                    className={`flex-1 py-3 text-sm font-display font-semibold transition-colors
                      ${form.condition === val ? 'bg-brand text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}>
                    {label}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="CIF Value" hint="(Cost + Insurance + Freight, in USD)">
              <div className="flex rounded-xl border border-border overflow-hidden focus-within:border-brand transition-colors">
                <span className="px-3 py-3 bg-gray-50 text-sm font-display font-medium text-gray-500 border-r border-border">$</span>
                <input type="number" placeholder="e.g. 3000"
                  className="flex-1 px-3 py-3 text-sm font-body focus:outline-none bg-white"
                  value={form.cifUsd} onChange={e => set('cifUsd', e.target.value)} />
              </div>
            </Field>

            <Field label="Exchange Rate" hint="(₦ per $1)">
              <div className="flex rounded-xl border border-border overflow-hidden focus-within:border-brand transition-colors">
                <span className="px-3 py-3 bg-gray-50 text-sm font-display font-medium text-gray-500 border-r border-border">₦/$</span>
                <input type="number" placeholder="1600"
                  className="flex-1 px-3 py-3 text-sm font-body focus:outline-none bg-white"
                  value={form.exchangeRate} onChange={e => set('exchangeRate', e.target.value)} />
              </div>
            </Field>

            {form.condition === 'new' && (
              <Field label="Engine Capacity" hint="(affects Green Tax)">
                <SelectWrapper>
                  <select className={selectCls} value={form.engineSize}
                    onChange={e => set('engineSize', e.target.value)}>
                    {ENGINE_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </SelectWrapper>
              </Field>
            )}

          </div>

          <button onClick={calculate} disabled={!canCalc}
            className={`w-full py-4 rounded-xl font-display font-bold text-base transition-all
              ${canCalc
                ? 'bg-brand text-white hover:bg-brand/90 shadow-md hover:shadow-lg'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
            Calculate Estimate
          </button>
        </div>

        {/* ── Result card ── */}
        {result && (
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">

            <div className="bg-brand px-6 py-5">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 size={18} className="text-accent" />
                <span className="text-white/80 text-xs font-display font-semibold uppercase tracking-widest">
                  Clearance Estimate
                </span>
              </div>
              <p className="text-white/60 text-xs font-body mt-1">
                {form.vehicleClass} · {form.condition === 'new' ? 'Brand New' : 'Used / Tokunbo'} · CIF ${parseFloat(form.cifUsd).toLocaleString()} @ ₦{parseFloat(form.exchangeRate).toLocaleString()}/$
              </p>
            </div>

            <div className="px-6 py-5">

              {/* Grand total */}
              <div className="flex items-center justify-between py-4 border-b-2 border-brand/20 mb-3">
                <div>
                  <p className="text-base font-display font-bold text-gray-900">Estimated Total Clearance Cost</p>
                  <p className="text-xs text-gray-400 font-body mt-0.5">Customs duty + port & clearing included</p>
                </div>
                <span className="text-2xl font-display font-bold text-brand">{fmt(result.grandTotal)}</span>
              </div>

              <LineItem
                label="Customs Duty Payable"
                sub="Paid directly to NCS / CBN"
                amount={fmt(result.totalDuty)}
              />
              <LineItem
                label="Port & Clearing Costs"
                sub="Terminal charges, documentation, agency fees"
                amount={fmt(result.running)}
              />

              {/* Breakdown toggle */}
              <button
                onClick={() => set('showBreakdown', !form.showBreakdown)}
                className="flex items-center gap-1.5 text-xs text-brand font-display font-semibold mt-4 hover:underline">
                <ChevronDown size={14} className={`transition-transform ${form.showBreakdown ? 'rotate-180' : ''}`} />
                {form.showBreakdown ? 'Hide' : 'Show'} duty breakdown
              </button>

              {form.showBreakdown && (
                <div className="bg-gray-50 rounded-xl p-4 mt-3 space-y-0">
                  <p className="text-xs font-display font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    NCS Duty Breakdown
                  </p>
                  <LineItem label="CIF Value (Naira equivalent)" amount={fmt(result.cifNgn)} muted />
                  <LineItem
                    label={`Import Duty (DTY) — ${result.isNew ? '10%' : '5%'} of CIF`}
                    amount={fmt(result.dty)}
                  />
                  <LineItem
                    label={`NAC Levy (SUR) — ${result.isNew ? '10%' : '7%'} of CIF`}
                    amount={fmt(result.sur)}
                  />
                  <LineItem label="CISS (ETL) — 0.5% of CIF" amount={fmt(result.etl)} />
                  <LineItem label="FOB Levy (FCS) — 4% of FOB" amount={fmt(result.fcs)} />
                  {result.isNew && result.engine !== 'ev' && (
                    <LineItem
                      label={`Green Tax — ${result.engine === 'above4000' ? '4%' : '2%'} of CIF`}
                      amount={fmt(result.greenTax)}
                    />
                  )}
                  <LineItem label="VAT — 7.5% of (CIF + Duty + Surcharge)" amount={fmt(result.vat)} />
                  <div className="flex justify-between pt-3 mt-1 border-t border-border">
                    <span className="text-sm font-display font-bold text-gray-800">Total Duty</span>
                    <span className="text-sm font-display font-bold text-gray-800">{fmt(result.totalDuty)}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Disclaimer + CTA */}
            <div className="border-t border-border bg-gray-50 px-6 py-5 space-y-4">
              <div className="flex gap-2.5">
                <AlertCircle size={15} className="text-accent mt-0.5 shrink-0" />
                <p className="text-xs font-body text-gray-500 leading-relaxed">
                  This is an estimate only. NCS may assess your vehicle above invoice value. Clearance timeline is 2–5 working days after vessel arrival and offload.
                </p>
              </div>
              <a href="/quote"
                className="block w-full text-center py-3.5 bg-accent text-white rounded-xl font-display font-bold text-sm hover:bg-accent/90 transition-colors shadow-sm">
                Get a Precise Quote from WAKARGO
              </a>
            </div>
          </div>
        )}

        {/* ── What WAKARGO handles ── */}
        <div className="bg-white rounded-2xl border border-border p-6 md:p-8">
          <h3 className="text-base font-display font-bold text-gray-900 mb-4">What WAKARGO Handles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Customs documentation & filing',
              'Duty payment coordination',
              'Terminal & port charges',
              'NCS valuation & unit signing',
              'Release & gate approval',
              'Haulage to your address',
            ].map(item => (
              <div key={item} className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-brand/10 flex items-center justify-center mt-0.5 shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                </div>
                <span className="text-sm font-body text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Required Documents ── */}
        <div className="bg-white rounded-2xl border border-border p-6 md:p-8">
          <h3 className="text-base font-display font-bold text-gray-900 mb-4">Documents You'll Need</h3>
          <div className="space-y-0">
            {[
              ['Original Bill of Lading / Telex Release', 'Issued by your shipping line'],
              ['Commercial Invoice', 'Showing CIF value of the vehicle'],
              ['Packing List', 'Vehicle details and VIN number'],
              ['Form M / SON Certificate', 'Required for vehicles above $10,000'],
              ['Consignee Valid ID', 'Government-issued ID of the importer'],
              ['JTB / TIN Certificate', 'Joint Tax Board Tax Identification Number'],
            ].map(([doc, sub]) => (
              <div key={doc} className="flex items-start gap-3 py-3 border-b border-border/60 last:border-0">
                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <div>
                  <p className="text-sm font-body font-medium text-gray-800">{doc}</p>
                  <p className="text-xs text-gray-400">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}