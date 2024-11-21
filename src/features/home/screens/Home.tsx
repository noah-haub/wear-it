import { Navbar, NavbarActionItem, NavbarPageName } from "@/shared/components/NavBar";
import { Star } from "lucide-react";
import { FC, useState } from "react";
import useResults from "../hooks/useResults";
import ResultCardSkeleton from "../components/ResultCardSkeleton";
import ProgressiveImage from "@/shared/components/ProgressiveImage";
import { ModalGenerateImage } from "../components/ModalGenerateImage";

const Home: FC = () => {
    const { data: results, isLoading } = useResults();

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Navbar>
                <NavbarPageName>Wear It</NavbarPageName>
                <NavbarActionItem
                    onClick={() => setShowModal(true)}
                    className="bg-lightGray rounded-full size-14 p-3"
                >
                    +
                </NavbarActionItem>
            </Navbar>
            <div className="bg-white w-full grid grid-flow-row md:grid-cols-4 grid-cols-2 justify-between flex-wrap gap-3 px-6 pb-6">
                {isLoading ? (
                    <>
                        <ResultCardSkeleton />
                        <ResultCardSkeleton />
                        <ResultCardSkeleton />
                        <ResultCardSkeleton />
                        <ResultCardSkeleton />
                    </>
                ) : results && results?.length > 0 ? (
                    results.map((result) => (
                        <div key={result.id} className="bg-lightGray rounded-xl p-1.5 flex flex-col gap-1.5 text-center">
                            <ProgressiveImage src={result.imageUrl} className="w-full aspect-square rounded-lg object-cover" />
                            <div className="flex flex-col gap-0 mx-auto">
                                <div className="flex flex-row gap-1">
                                    {Array.from({ length: result.rating }).map((_, index) => (
                                        <Star key={index} fill="#FFE821" strokeWidth={0} />
                                    ))}
                                    {Array.from({ length: 5 - result.rating }).map((_, index) => (
                                        <Star key={index} fill="#DDDDDD" strokeWidth={0} />
                                    ))}
                                </div>
                                <p className="text-lg font-medium">AI-Rating</p>
                            </div>
                            <p className="text-sm text-black/50">{new Date(result.createdAt).toLocaleDateString()}</p>
                        </div>
                    ))
                ) : (
                    <div>No images yet</div>
                )}
            </div>
            {showModal && <ModalGenerateImage setShowModal={setShowModal} />}
        </>
    );
};

export default Home;
