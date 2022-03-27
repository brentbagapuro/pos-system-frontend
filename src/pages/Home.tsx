import {
  IonPage,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonButton,
  IonMenuButton,
  IonButtons,
} from '@ionic/react'
import { add } from 'ionicons/icons'
import { RouteComponentProps } from 'react-router'

import { Menu, Toolbar } from '../components/Layout'
import ExploreContainer from '../components/ExploreContainer'

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <>
      <Menu />
      <IonPage id="main">
        <Toolbar />

        <IonContent>
          <ExploreContainer {...props} />
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton onClick={() => props.history.push('/new')}>
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Home
