    "use client";

    import Link from "next/link";

    const favoriteCard = ({ images }) => {
        return (
        <>
        {images.length > 0 ? images.map((image, idx) => (
            <div key={image.id} className="relative group">
            <Link href={`/image/${image.id}`}>  <video autoPlay loop muted src={image.images.fixed_height.mp4} alt="" className="mb-5" /></Link>
            <div
                className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40"
            >
                <div className="flex justify-between">
                <div className="font-normal">
                    <p className="text-sm">{image.user ? image.user.name : 'Unknown User'}</p>
                    <p className="text-xs">{image.likes} likes</p>
                </div>
                <div className="flex items-center">
                    <Link href={image.images.original.url}>Download</Link> 
                </div>
                </div>
            </div>
            </div>
        )) : (
            <div>
            <div className="grid gap-8 py-8 ">
                {[...Array(7)].map((_, index) => (
                <div key={index} className="animate-pulse space-y-2 ">
                    <div className="bg-gray-200 h-72"></div>
                </div>
                ))}
            </div>
            </div>
        )}
        </>
    )
    }
    export default favoriteCard;
