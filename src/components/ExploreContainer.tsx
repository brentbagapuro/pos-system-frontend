import {
  IonList,
  IonItem,
  IonCheckbox,
  IonLabel,
  IonNote,
  IonBadge,
} from '@ionic/react'

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <>
      <IonList>
        <IonItem>
          <IonCheckbox slot="start" />
          <IonLabel>
            <h1>Create Idea</h1>
            <IonNote>Run Idea by Brandy</IonNote>
          </IonLabel>
          <IonBadge color="success" slot="end">
            5 Days
          </IonBadge>
        </IonItem>
      </IonList>
    </>
  )
}

export default ExploreContainer
