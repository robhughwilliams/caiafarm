import React, { useRef, useState, useEffect } from "react";
import ThankYou from "./ThankYou";
import ErrorNotice from "./ErrorNotice";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";

const ENQUIRY_DRAFT_KEY = "enquiryDraft";

const initialState = {
  name: "",
  phone: "",
  email: "",
  dates: "",
  message: "",
  intendedUse: "",
  interestedUnits: [] as string[],
  "bot-field": ""
};

const units = [
  { id: "1", name: "Unit 1 - The Corner Office" },
  { id: "2", name: "Unit 2 - The Bright Side" },
  { id: "3", name: "Unit 3 - The Social Hub" },
  { id: "4", name: "Unit 4 - The Collaborator" },
  { id: "5", name: "Unit 5 - The Quiet Achiever" },
  { id: "6", name: "Unit 6 - The Independent" },
];

export default function EnquiryForm() {
  const [formState, setFormState] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const formRef = useRef<HTMLFormElement>(null);

  // Repopulate from localStorage on mount
  useEffect(() => {
    const cached = localStorage.getItem(ENQUIRY_DRAFT_KEY);
    if (cached) setFormState(JSON.parse(cached));
  }, []);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    if (name === "interestedUnits") {
      setFormState((prev) => ({
        ...prev,
        interestedUnits: checked
          ? [...prev.interestedUnits, value]
          : prev.interestedUnits.filter((id) => id !== value),
      }));
    } else {
      setFormState((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle select change
  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, intendedUse: value }));
  };

  // Handle calendar date select
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setCalendarOpen(false);
    setFormState((prev) => ({ ...prev, dates: date ? date.toISOString().split("T")[0] : "" }));
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // Prepare data
    const data = new FormData(form);
    const body = new URLSearchParams(data as any).toString();
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body
      });
      if (res.ok) {
        setStatus("success");
        localStorage.removeItem(ENQUIRY_DRAFT_KEY);
      } else {
        throw new Error("Network error");
      }
    } catch (err) {
      setStatus("error");
      setError("Submission failed. Please try again.");
      localStorage.setItem(ENQUIRY_DRAFT_KEY, JSON.stringify(formState));
    }
  };

  if (status === "success") return <ThankYou />;
  if (status === "error") return <ErrorNotice message={error} />;

  return (
    <Card className="border-gray-200">
      <CardHeader>
        <CardTitle className="text-2xl text-black">Enquiry Form</CardTitle>
        <CardDescription className="text-gray-600">
          Tell us about your requirements - don't worry, we're good listeners (even better than cows)!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          ref={formRef}
          name="enquiry"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/thank-you"
          onSubmit={handleSubmit}
          autoComplete="on"
          className="space-y-6"
        >
          {/* Netlify hidden input */}
          <input type="hidden" name="form-name" value="enquiry" />
          {/* Honeypot */}
          <div style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}>
            <label>
              Don't fill this out: <input name="bot-field" value={formState["bot-field"]} onChange={handleChange} tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-black">Full Name *</Label>
              <Input
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                className="border-gray-200 focus:border-gray-400"
                autoComplete="name"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-black">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formState.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="border-gray-200 focus:border-gray-400"
                autoComplete="email"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" className="text-black">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                pattern="\+?[0-9\s\-]{7,}"
                value={formState.phone}
                onChange={handleChange}
                placeholder="01234 567890"
                className="border-gray-200 focus:border-gray-400"
                autoComplete="tel"
              />
            </div>
          </div>
          {/* Unit Interest */}
          <div>
            <Label className="text-black mb-3 block">Which units interest you?</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {units.map((unit) => (
                <div key={unit.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`unit-${unit.id}`}
                    name="interestedUnits"
                    value={unit.id}
                    checked={formState.interestedUnits.includes(unit.id)}
                    onCheckedChange={(checked) => handleChange({
                      target: { name: "interestedUnits", value: unit.id, type: "checkbox", checked: !!checked }
                    } as any)}
                  />
                  <Label htmlFor={`unit-${unit.id}`} className="text-gray-700 text-sm cursor-pointer">
                    {unit.name}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          {/* Business Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="intendedUse" className="text-black">Intended Use *</Label>
              <Select value={formState.intendedUse} onValueChange={handleSelectChange} required name="intendedUse">
                <SelectTrigger className="border-gray-200">
                  <SelectValue placeholder="Select primary use" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="office">Office Space</SelectItem>
                  <SelectItem value="storage">Storage</SelectItem>
                  <SelectItem value="workshop">Workshop</SelectItem>
                  <SelectItem value="mixed">Mixed Use</SelectItem>
                  <SelectItem value="other">Other (please specify in message)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="dates" className="text-black">Required from… *</Label>
              <div className="relative">
                <Input
                  id="dates"
                  name="dates"
                  required
                  value={formState.dates}
                  onFocus={() => setCalendarOpen(true)}
                  onChange={handleChange}
                  placeholder="Required from…"
                  className="border-gray-200 focus:border-gray-400 cursor-pointer"
                  readOnly
                />
                {calendarOpen && (
                  <div className="absolute z-10 bg-white border rounded shadow mt-2">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={handleDateSelect}
                      initialFocus
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Message */}
          <div>
            <Label htmlFor="message" className="text-black">Your Message *</Label>
            <Textarea
              id="message"
              name="message"
              required
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell us about your requirements, any specific questions, or just say hello! We love a good chat."
              rows={5}
              className="border-gray-200 focus:border-gray-400"
            />
          </div>
          <Button type="submit" size="lg" className="w-full text-white hover:opacity-90" style={{ backgroundColor: '#ff4040' }}>
            Send Enquiry
          </Button>
          <p className="text-sm text-gray-600 text-center">
            * Required fields - we promise we're not as picky as a cow choosing grass!
          </p>
        </form>
      </CardContent>
    </Card>
  );
} 