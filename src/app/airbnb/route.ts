import { NextResponse, NextRequest } from "next/server";
import {places} from "@/src/mock/places";


export function GET(req: NextRequest){
   return NextResponse.json(places);
}
