import { Navbar, NavbarActionItem, NavbarPageName } from "@/shared/components/NavBar";
import { AnimatePresence } from "motion/react";
import { FC, useState } from "react";
import { ModalGenerateImage } from "../components/ModalGenerateImage";
import ResultCard from "../components/ResultCard";
import ResultCardSkeleton from "../components/ResultCardSkeleton";
import useResults from "../hooks/useResults";

const Home: FC = () => {
    const { data: results, isLoading } = useResults();

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Navbar>
                <NavbarPageName>Wear It</NavbarPageName>
                <NavbarActionItem onClick={() => setShowModal(true)} className="bg-lightGray rounded-full size-14 p-3">
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
                    results.map((result) => <ResultCard result={result} />)
                ) : (
                    <div>No images yet</div>
                )}
            </div>
            <AnimatePresence>{showModal && <ModalGenerateImage setShowModal={setShowModal} />}</AnimatePresence>
        </>
    );
};

export default Home;
