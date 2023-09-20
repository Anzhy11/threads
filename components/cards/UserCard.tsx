"use client"

import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface Props {
    id: string;
    name: string;
    username: string;
    imgUrl: string;
    personType: string;
}

const UserCard = ({id, name, username, imgUrl, personType}: Props) => {
    const router = useRouter();
    return (
        <article className="user-card">
            <div className="user-card_avatar">
                <Image
                    src={imgUrl} 
                    alt="logo"
                    width={48}
                    height={48}
                    className="rounded-full"
                />

                <div className="flex-1 text-ellipsis">
                    <h1 className="text-base-semibold text-light-1">{name}</h1>
                    <p className="text-small-medium text-gray-1">@{username}</p>
                </div>

            </div>

            <Button className="user-card_btn" onClick={() => router.push('/profile/$(id)') }>
                You
            </Button>
        </article>
    )
}

export default UserCard