import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
} from '@ionic/react'

const Menu: React.FC = () => {
  return (
    <>
      <IonMenu side="start" contentId="main">
        <IonHeader>
          <IonToolbar color="translucent">
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>Home</IonItem>
            <IonItem>Dashboard</IonItem>
            <IonItem>Inventory</IonItem>
            <IonItem>Login</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  )
}

export default Menu
