import * as React from 'react';
import { DividerPage } from 'office-ui-fabric-react/lib/components/Divider/DividerPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class DividerComponentPage extends React.Component<any, any> {
  public render() {
    return (
      <div ref='pageElement' className={ pageStyles.basePage }>
        <ComponentPage>
          <PageHeader pageTitle='DividerPage' backgroundColor='#038387'
            links={
              [
                {
                  'text': 'Overview',
                  'location': 'Overview'
                },
                {
                  'text': 'Variants',
                  'location': 'Variants'
                },
                {
                  'text': 'Implementation',
                  'location': 'Implementation'
                }
              ]
            } />
          <DividerPage isHeaderVisible={ false } />
        </ComponentPage>
      </div>
    );
  }
}
