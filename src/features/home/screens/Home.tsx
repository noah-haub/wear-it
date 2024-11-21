import {
  Navbar,
  NavbarActionItem,
  NavbarPageName,
} from "@/shared/components/NavBar";
import { FC, useState } from "react";
import useResults from "../hooks/useResults";
import ResultCardSkeleton from "../components/ResultCardSkeleton";
import { ModalGenerateImage } from "../components/ModalGenerateImage";
import ResultCard from "../components/ResultCard";

const Home: FC = () => {
  const { data: results, isLoading } = useResults();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar>
        <NavbarPageName>Wear It</NavbarPageName>
        <NavbarActionItem
          onClick={() => {
            // TODO: open modal
            console.log(`🟠🟠🟠 Add clicked`);
          }}
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
            <>
              <ResultCard result={result} />
            </>
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
