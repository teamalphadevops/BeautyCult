"use client";

import { useState } from "react";
import { services, WHATSAPP_NUMBER } from "../data";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    service: services[0].title,
    area: "Redhills",
    date: "",
    notes: "",
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const lines = [
      "Hi Beauty Cult! I'd like to book an appointment.",
      `Name: ${form.name}`,
      `Service: ${form.service}`,
      `Area: ${form.area}`,
      form.date && `Preferred date: ${form.date}`,
      form.notes && `Notes: ${form.notes}`,
    ].filter(Boolean);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="booking-form" onSubmit={submit}>
      <label>
        Your name
        <input name="name" value={form.name} onChange={update} required placeholder="e.g. Priya" />
      </label>

      <label>
        Service
        <select name="service" value={form.service} onChange={update}>
          {services.map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
        </select>
      </label>

      <div className="form-row">
        <label>
          Area
          <select name="area" value={form.area} onChange={update}>
            <option>Redhills</option>
            <option>Chennai</option>
          </select>
        </label>

        <label>
          Preferred date
          <input type="date" name="date" value={form.date} onChange={update} />
        </label>
      </div>

      <label>
        Notes (optional)
        <textarea name="notes" rows={3} value={form.notes} onChange={update} placeholder="Time, number of people, special requests…" />
      </label>

      <button type="submit" className="btn btn-whatsapp btn-block">
        Send via WhatsApp
      </button>
      <p className="form-hint">Opens WhatsApp with your booking details filled in.</p>
    </form>
  );
}
