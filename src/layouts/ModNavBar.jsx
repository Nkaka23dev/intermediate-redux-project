import { FiMenu } from "react-icons/fi";
import MobNavModal from "../components/MobNavModal";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../services/features/store";

export default function ModNavBar() {
  const popUp = useSelector((state) => state.articles.showModal);
  const dispatch = useDispatch();
  const showModal = () => {
    dispatch(setShowModal({ showModal: !popUp }));
  };

  return (
    <section className="hidden lg:block">
      <div className="fixed left-0 right-0 top-0 w-full bg-white z-50">
        <div className="max-w-7xl px-5 items-center   mx-auto  py-6 flex gap-10 justify-between ">
          <div>
            <Link
              to="/"
              className="text-lg font-bold text-red-600 cursor-pointer"
            >
              News Article
            </Link>
          </div>
          <div onClick={(event) => showModal()} className="cursor-pointer">
            <FiMenu className="text-3xl" />
          </div>
        </div>
        {popUp && <MobNavModal />}
      </div>
    </section>
  );
}
