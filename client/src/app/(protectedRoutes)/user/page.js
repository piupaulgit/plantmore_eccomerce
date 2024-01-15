import OtherPageBanner from '../../OtherPageBanner'
import SelectedProductList from '../../SelectedProductList'
import { Tab, Tabs } from '../../Tabs'
import React from 'react'

const user = () => {
  return (
    <>
        <OtherPageBanner title="User: Piu Paul"></OtherPageBanner>
        <div className='container mx-auto'>
            <Tabs position="justify-start" divider={true}>
                <Tab title="Profile">
                    <p>Lorem ipsul dolor sit amet</p>
                </Tab>
                <Tab title="Orders">
                    <SelectedProductList></SelectedProductList>
                </Tab>
                <Tab title="Saved Address">
                    <p>Lorem ipsul dolor sit amet</p>
                </Tab>
            </Tabs>
        </div>
    </>
  )
}

export default user