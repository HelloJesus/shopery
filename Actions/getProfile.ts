import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";

export const getProfile = async (id: string) => {
    const serverSupabase = createServerComponentClient<Database>({ cookies });

    const { data: profile } = await serverSupabase.from('profile').select('*').eq('user_id', id);
    return { profile }
}