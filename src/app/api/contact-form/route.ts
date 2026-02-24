import {
    Resend
} from "resend";
import {
    ContactFormSchema
} from "@/app/lib/validation";
import {
    NextResponse
} from "next/server";

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend("re_LzP42K9p_JyWQ6sMNdTRP7NwoDGHzJAJj");

export async function POST (request: Request) {
    try {
        const body = await request.json();
        const safeParsedBody = ContactFormSchema.safeParse(body);

        if (!safeParsedBody.success) {
            return (
                NextResponse.json(
                    {
                        errors: "Špatný požadavek HTTP ERROR 400"
                    },
                    {
                        status: 400
                    }
                )
            );
        };

        const {
            name,
            email,
            phone,
            adress,
            message
        } = safeParsedBody.data;

        await resend.emails.create({
            from: "onboarding@resend.dev",
            to: `adpodlahy@seznam.cz`,
            subject: "Nová zpráva / poptávka z adpodlahy.cz",
            html: `
            <p>
                Jméno: ${name}
            </p>
            <p>
                E-mail: ${email}
            </p>
            <p>
                Telefonní číslo: ${phone?.trim() || "-"}
            </p>
            <p>
                Adresa: ${adress}
            </p>
            <p>
                Zpráva: ${message}
            </p>
            `
        });

        return (
            NextResponse.json({
                success: true
            })
        );
    } catch (error) {
        console.error("Něco se nezdařilo při odesílání zprávy:", error);

        return (
            NextResponse.json({
                errors: "Nezdařilo se odeslat zprávu z webového formuláře."
            })
        );
    };
};