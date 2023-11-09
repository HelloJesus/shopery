import { Database } from "@/types/supabase";
import { createServerActionClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { getProfile } from "@/Actions/getProfile";
import { FormProfile } from "./components/FormProfile";
import { Avatar } from "./components/Avatar";

export default async function Profile() {
    const serverSupabase = createServerComponentClient<Database>({ cookies })
    const { data: { user } }: any = await serverSupabase.auth.getUser()
    const { profile } = await getProfile(user.id)

    const addTodo = async (formData: FormData) => {
        'use server'
        const first_name = formData.get('firstName')
        const last_name = formData.get('lastName')
        const phone_number = formData.get('phone')
        const supabase = createServerActionClient({ cookies })
        const { data, error } = await supabase.from('profile').update({
            first_name,
            last_name,
            phone_number
        }).eq('id', profile && profile[0].id).select()
    }

    return (
        <div className="py-4 lg:py-6 px-2 max-w-[1116px] m-auto">
            <div className="border border-gray-100 rounded-lg">
                <div className="py-4 px-6 flex items-center border-b border-gray-100">
                    <p className="text-gray-900 text-xl	font-medium">Account Settings</p>
                </div>
                <div className="p-3 lg:p-6 flex items-center flex-wrap sm:flex-nowrap flex-col flex-col-reverse sm:flex-row">
                    <FormProfile addTodo={addTodo} profile={profile && profile[0]} email={user.email}/>
                    <Avatar
                        profileId={profile && profile[0].id.toString()}
                        uid={profile && profile[0].user_id}
                        img={profile && profile[0].avatar_img || "/images/all/avatar.jpg"}
                    />
                </div>
            </div>
        </div>
    )
}