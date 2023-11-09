"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Image from "next/image"
import { useEffect, useState } from "react"

export const Avatar = ({ profileId, uid, img }: { profileId: string | null, uid: string | null, img: string }) => {
    const supabase = createClientComponentClient()
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null)
    const [uploading, setUploading] = useState(false)

    useEffect(() => {
        if (img) downloadImage(img)
    })

    async function downloadImage(path: string) {
        try {
            const { data, error } = await supabase.storage.from('profile/avatars').download(path)
            if (error) {
                throw error
            }

            const url = URL.createObjectURL(data)
            setAvatarUrl(url)
        } catch (error) {
            console.log('Error downloading image: ', error)
        }
    }

    async function updateProfile(avatar_img: string) {
        try {
            const { error } = await supabase.from('profile').upsert({
                id: profileId,
                avatar_img,
            })
            if (error) throw error

        } catch (error) {
            alert('Error updating the data!')
        } finally {
            //   setLoading(false)
        }
    }

    const uploadAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setUploading(true)

            if (!e.target.files || e.target.files.length === 0) {
                throw new Error('You must select an image to upload.')
            }

            const file = e.target.files[0]
            const fileExt = file.name.split('.').pop()
            const filePath = `${uid}-${Math.random()}.${fileExt}`
            
            const { error: uploadError } = await supabase.storage.from('profile/avatars').upload(filePath, file)
            // remove old img
            const { error: removeError } = await supabase.storage.from('profile').remove([`avatars/${img}`])

            if (uploadError) {
                throw uploadError
            }

            updateProfile(filePath)
            downloadImage(filePath)
        } catch (error) {
            alert('Error uploading avatar!')
        } finally {
            setUploading(false)
        }
    }

    return (
        <div className="flex flex-col items-center w-full mb-8 sm:mb-0">
            <div className="rounded-full overflow-hidden w-[175px] h-[175px] sm:w-[225px] sm:h-[225px] relative mb-5">
                {avatarUrl && <Image className="object-cover" src={avatarUrl} fill={true} alt="avatar"></Image>}
            </div>
            <label htmlFor="file" 
            className={`w-max py-3 px-5 sm:px-8 border-2 rounded-full
            ${uploading ? 'bg-gray-200 border-gray-300 text-white' : 'border-primary text-primary'} font-semibold text-sm cursor-pointer`}>
                Chose Image
                <input
                    id="file"
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={uploadAvatar}
                    className={`hidden p-3 text-gray-600 border border-gray-100 rounded-lg outline-none w-full`}
                    placeholder="file"
                    disabled={uploading}
                />
            </label>
        </div>
    )
}