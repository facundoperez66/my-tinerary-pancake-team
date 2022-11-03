import React from 'react'
import './SocialNet.css'
export default function LinkSocialNet() {
  return (
    <div className='SocialNetContainer'>
        <div className='SocialNet'>
            <a href="https://web.whatsapp.com/">
                <img src="https://www.pngmart.com/files/22/WhatsApp-Logo-PNG-Isolated-Photo.png" alt="whatsapp" />
            </a>
        </div>
        <div className='SocialNet'>
            <a href="https://www.instagram.com/">
                <img src="https://www.pngmart.com/files/21/Instagram-Logo-PNG-HD-Isolated.png" alt="instagram" />
            </a>
        </div>
        <div className='SocialNet'>
            <a href="https://www.facebook.com/home.php">
                <img src="https://i.pinimg.com/originals/44/68/11/446811a7d7de50422ebc28988e103b57.png" alt="facebook" />
            </a>
        </div>
    </div>
  )
}
