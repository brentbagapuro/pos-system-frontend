import {
  IonHeader,
  IonToolbar,
  IonButton,
  IonMenuButton,
  IonButtons,
  IonTitle,
} from '@ionic/react'

const Toolbar: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>Brand Name</IonTitle>
        <IonButtons slot="end">
          <IonButton>
            <IonMenuButton />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  )
}

export default Toolbar
