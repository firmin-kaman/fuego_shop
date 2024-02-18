// import React from 'react'
import Footer from '../../Components/Pages/Navigation/Footer'
import Header from '../../Components/Pages/Navigation/Header'
import ProfileComponent from '../../Components/Pages/Profile/ProfileComponent'

const ProfilePage = () => {
  return (
    <div>
        <Header/>
        <ProfileComponent user={{
        name: '',
        email: '',
        phone: '',
        address: '',
        location: '',
        mostPurchasedProduct: '',
        totalProductsPurchased: 0
      }} onEditProfile={function (): void {
        throw new Error('Function not implemented.')
      } } onDeleteProfile={function (): void {
        throw new Error('Function not implemented.')
      } }/>
        <Footer/>
    </div>
  )
}

export default ProfilePage