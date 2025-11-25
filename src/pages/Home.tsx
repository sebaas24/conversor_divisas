import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
} from "@ionic/react";
import { useState } from "react";

const Home: React.FC = () => {
  const [quetzales, setQuetzales] = useState<number>(0);
  const [dolares, setDolares] = useState<number | null>(null);

  const convertir = () => {
    const resultado = quetzales / 8; 
    setDolares(resultado);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>DivisApp - 17007691</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Cantidad en Quetzales (GTQ)</IonLabel>
          <IonInput
            type="number"
            value={quetzales}
            onIonChange={(e) => setQuetzales(parseFloat(e.detail.value!) || 0)}
          />
        </IonItem>

        <IonButton expand="block" className="ion-margin-top" onClick={convertir}>
          Convertir a Dólares
        </IonButton>

        {dolares !== null && (
          <IonText color="success">
            <h2 className="ion-text-center ion-margin-top">
              Equivalente en USD: <strong>${dolares.toFixed(2)}</strong>
            </h2>
          </IonText>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
