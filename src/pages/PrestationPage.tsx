import Footer from "../commons/Footer/Footer";
import Header from "../commons/header/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Prestation from "../models/Prestation";
import PrestationService from "../services/PrestationService";
import PrestationCard from "../components/prestation/PrestationCard";
import { FiEdit } from "react-icons/fi";

const PrestationPage: React.FC = () => {
  const [prestation, setPrestation] = useState<Prestation>();
  const { id } = useParams<string>();

  useEffect(() => {
    if (id) {
      PrestationService.getPrestationsById(+id).then((prestation) =>
        setPrestation(prestation)
      );
    }
  }, [id]);

  return (
    <>
      <Header />
      {prestation?.id ? (
        <>
          <div className="card">
            <PrestationCard prestation={prestation} />
            {/*<link to={`/edit/${id}`}>
              <FiEdit />
            </link> */}
          </div>
        </>
      ) : (
        <h1>Cette prestation n'exite pas</h1>
      )}
      <Footer />
    </>
  );
};
export default PrestationPage;