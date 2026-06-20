import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await axios.get("https://github-contributions-api.jogruber.de/v4/Manav948");
        return NextResponse.json(res.data);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to fetch GitHub contributions" },{ status: 500 })
    }
}