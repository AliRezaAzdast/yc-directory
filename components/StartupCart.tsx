import { formatDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button";

const StartupCart = ({ post }: { post: StartupCardType }) => {
    return (
        <li className="startup-card group">
            <div className="flex-between">
                <p className="startup-cart-date">
                    {formatDate(post._createdAt)}
                </p>
                <div className="flex gap-1.5">
                    <EyeIcon className="size-6 text-primary" />
                    <span className="text-16-medium">{post.views}</span>
                </div>
            </div>
            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${post.auther?._id}`}>
                        <p className="text-16-medium line-clamp-1 ">{post.auther?.name}</p>
                    </Link>
                    <Link href={`/post/${post._id}`}>
                        <h3 className="text-26-semibold line-clamp-1">{post.title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${post.auther?._id}`}>
                    <Image src='https://placehold.co/48*48' alt="placeholder" width={48} height={48} className="rounded-full"/>
                </Link>
            </div>
            <div>
                <Link href={`/startup/${post._id}`}>
                <p className="startup-card_desc">
                    {post.description}
                </p>

                  <img src={post.image} alt="placeholder" className="startup-card_img"/>
                </Link>
            </div>

            <div className="flex-between gap-3 mt-5">
                <Link href={`/?query=${post.catagory.toLowerCase()}`}>
                    <p className="text-16-medium">{post.catagory}</p>
                </Link>
                <Button className="startup-card_btn" asChild>
                        <Link href={`/startup/${post._id}`}>detail</Link>
                    </Button>
            </div>
        </li>
    )
}

export default StartupCart