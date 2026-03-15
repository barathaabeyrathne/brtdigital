export type LeadPayload = {
  name: string;
  email: string;
  company?: string;
  budget: string;
  message: string;
};

export async function submitLead(payload: LeadPayload) {
  // Wire to EmailJS or your backend endpoint.
  console.log('Lead payload:', payload);
  return new Promise<{ ok: boolean }>((resolve) => {
    setTimeout(() => resolve({ ok: true }), 450);
  });
}
