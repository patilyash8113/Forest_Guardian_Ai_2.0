import { useState, useRef } from 'react';
import { User, Mail, Phone, MapPin, ImagePlus, Loader2, X } from 'lucide-react';
import FormField from '../components/FormField';
import SuccessCard from '../components/SuccessCard';
import ErrorAlert from '../components/ErrorAlert';
import { WEBHOOK_URL, DESCRIPTION_MAX_LENGTH } from '../config';

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  location: '',
  description: '',
};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Please enter your name.';

  if (!form.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (!form.phone.trim()) {
    errors.phone = 'Please enter a phone number.';
  } else if (!/^[+\d][\d\s-()]{6,}$/.test(form.phone.trim())) {
    errors.phone = 'Enter a valid phone number.';
  }

  if (!form.location.trim()) errors.location = 'Please describe the location.';

  if (!form.description.trim()) {
    errors.description = 'Please describe what you observed.';
  } else if (form.description.trim().length < 20) {
    errors.description = 'Please add a little more detail (at least 20 characters).';
  }

  return errors;
}

export default function ReportIncident() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [apiResponse, setApiResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'description' && value.length > DESCRIPTION_MAX_LENGTH) return;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const clearImage = () => {
    setImage(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const resetForm = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    clearImage();
    setStatus('idle');
    setApiResponse(null);
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    setErrorMessage('');

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      location: form.location.trim(),
      description: form.description.trim(),
      timestamp: new Date().toISOString(),
      report_source: 'Citizen',
    };

    try {
      if (WEBHOOK_URL.includes('PASTE_')) {
        throw new Error(
          'The reporting endpoint has not been configured yet. Set WEBHOOK_URL in src/config.js to your n8n webhook URL.'
        );
      }

      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`The server responded with an error (status ${res.status}). Please try again.`);
      }

      const data = await res.json().catch(() => ({}));
      setApiResponse(data);
      setStatus('success');
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong while sending your report. Please try again.'
      );
      setStatus('error');
    }
  };

  const charCount = form.description.length;
  const charPercent = Math.min(100, (charCount / DESCRIPTION_MAX_LENGTH) * 100);

  return (
    <div className="bg-canopy-50 pb-24 pt-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <p className="eyebrow justify-center">Report Incident</p>
          <h1 className="mt-3 text-4xl font-semibold text-canopy-900 sm:text-5xl">
            Tell us what you saw
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-canopy-700/80">
            Illegal logging, forest fires, poaching, pollution, or encroachment — every detail
            helps the AI assess risk and route your report to the right responders.
          </p>
        </div>

        <div className="mt-12">
          {status === 'success' ? (
            <SuccessCard response={apiResponse} onReset={resetForm} />
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-canopy-100 bg-white p-7 shadow-xl shadow-canopy-900/5 sm:p-10"
            >
              {status === 'error' && (
                <div className="mb-6">
                  <ErrorAlert message={errorMessage} onDismiss={() => setStatus('idle')} />
                </div>
              )}

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Jane Doe"
                  icon={User}
                  required
                />
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="jane@example.com"
                  icon={Mail}
                  required
                />
                <FormField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  placeholder="+91 98765 43210"
                  icon={Phone}
                  required
                />
                <FormField
                  label="Location"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  error={errors.location}
                  placeholder="Forest range, landmark, or coordinates"
                  icon={MapPin}
                  required
                />
              </div>

              <div className="mt-6">
                <FormField
                  label="Incident Description"
                  name="description"
                  as="textarea"
                  rows={6}
                  value={form.description}
                  onChange={handleChange}
                  error={errors.description}
                  placeholder="Describe what you observed — what happened, when, and anything else responders should know."
                  required
                />
                <div className="mt-1.5 flex items-center justify-between">
                  <div className="h-1 flex-1 overflow-hidden rounded-full bg-canopy-100">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        charPercent > 90 ? 'bg-rust-500' : 'bg-canopy-400'
                      }`}
                      style={{ width: `${charPercent}%` }}
                    />
                  </div>
                  <span className="ml-3 whitespace-nowrap font-mono text-xs text-canopy-700/60">
                    {charCount}/{DESCRIPTION_MAX_LENGTH}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <label className="mb-1.5 block text-sm font-medium text-canopy-800">
                  Upload Image <span className="font-normal text-canopy-700/50">(optional)</span>
                </label>

                {imagePreview ? (
                  <div className="relative w-fit">
                    <img
                      src={imagePreview}
                      alt="Incident preview"
                      className="h-36 w-36 rounded-xl border border-canopy-100 object-cover"
                    />
                    <button
                      type="button"
                      onClick={clearImage}
                      aria-label="Remove image"
                      className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-canopy-900 text-white shadow-md transition-transform hover:scale-110"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ) : (
                  <label
                    htmlFor="image-upload"
                    className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-canopy-200 bg-canopy-50/50 px-6 py-8 text-center transition-colors hover:border-canopy-400 hover:bg-canopy-50"
                  >
                    <ImagePlus size={24} className="text-canopy-400" />
                    <span className="text-sm text-canopy-700/70">
                      Click to upload a photo of the incident
                    </span>
                    <input
                      ref={fileInputRef}
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageSelect}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary mt-8 w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Submitting Report...
                  </>
                ) : (
                  'Submit Report'
                )}
              </button>

              <p className="mt-4 text-center text-xs text-canopy-700/50">
                Your report is analyzed by AI and shared with local forest authorities.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
