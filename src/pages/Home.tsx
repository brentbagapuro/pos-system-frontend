import { IonPage, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react'
import { RouteComponentProps } from 'react-router'

import { Menu, Toolbar } from 'components/Layout'
import { CartItems, ControlButtons, Categories, Items } from 'components/Home'

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <>
      <Menu />
      <IonPage id="main">
        <Toolbar />

        <IonContent>
          <IonGrid>
            <IonRow>
              <IonCol size="3">
                <CartItems />
                <ControlButtons />
              </IonCol>
              <IonCol size="9">
                <Categories />
                <Items />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Home
