import React from 'react'
import './Hero3.css'
export const Hero3 = () => {
    return (
        <div className='h-screen flex flex-col justify-around items-center'>
            <div className='m-28'>
                <p className='text-[#AFFC41] text-9xl'>our works</p>
            </div>
            <div className="h-[100vh] flex items-center justify-around flex-col gap-10">
                <div className="work-cards-container-1 flex items-center gap-3">
                    <div className="bg-[#AFFC41] h-[150px] w-[300px] rounded-xl"></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/1.png")] h-[300px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/2.png")] h-[300px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/3.png")] h-[300px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/4.png")] h-[300px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/5.png")] h-[300px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/6.png")] h-[300px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/1.png")] h-[300px] w-[300px] rounded-xl bg-cover'></div>
                    {/* <img src="https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/1.png" alt="" srcSet="" className='h-[300px] w-[300px] rounded-xl size-fit' />
                    <img src="https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/2.png" alt="" srcSet="" className='h-[300px] w-[300px] rounded-xl size-fit' />
                    <img src="https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/3.png" alt="" srcSet="" className='h-[300px] w-[300px] rounded-xl size-fit' />
                    <img src="https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/4.png" alt="" srcSet="" className='h-[300px] w-[300px] rounded-xl size-fit' />
                    <img src="https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/5.png" alt="" srcSet="" className='h-[300px] w-[300px] rounded-xl size-fit' />
                    <img src="https://cdn.jsdelivr.net/gh/shaheer-git/FyreHubAssets/cards-container-1/6.png" alt="" srcSet="" className='h-[300px] w-[300px] rounded-xl size-fit' /> */}
                </div>
                <div className="work-cards-container-2 flex items-center gap-3">
                    {/* <div className='bg-[url("https://cdn.jsdelivr.net/gh/Mhdkaif0007/fyreHub@c6a9f7880510b95b7b619b8992eb99075645a64e/src/assets/0f2e53294568b34e8a183f3d1c295b6b4cc9a909.png")] h-[150px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/Mhdkaif0007/fyreHub@9b8e4fc7d8f730eac81de29c829abe545f5578e5/src/assets/img1.png")] h-[150px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/Mhdkaif0007/fyreHub@9b8e4fc7d8f730eac81de29c829abe545f5578e5/src/assets/img1.png")] h-[150px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/Mhdkaif0007/fyreHub@9b8e4fc7d8f730eac81de29c829abe545f5578e5/src/assets/img1.png")] h-[150px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/Mhdkaif0007/fyreHub@c6a9f7880510b95b7b619b8992eb99075645a64e/src/assets/0f2e53294568b34e8a183f3d1c295b6b4cc9a909.png")] h-[150px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/Mhdkaif0007/fyreHub@c6a9f7880510b95b7b619b8992eb99075645a64e/src/assets/0f2e53294568b34e8a183f3d1c295b6b4cc9a909.png")] h-[150px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/Mhdkaif0007/fyreHub@c6a9f7880510b95b7b619b8992eb99075645a64e/src/assets/0f2e53294568b34e8a183f3d1c295b6b4cc9a909.png")] h-[150px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/Mhdkaif0007/fyreHub@c6a9f7880510b95b7b619b8992eb99075645a64e/src/assets/0f2e53294568b34e8a183f3d1c295b6b4cc9a909.png")] h-[150px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/Mhdkaif0007/fyreHub@c6a9f7880510b95b7b619b8992eb99075645a64e/src/assets/0f2e53294568b34e8a183f3d1c295b6b4cc9a909.png")] h-[150px] w-[300px] rounded-xl bg-cover'></div> */}
                    {/* <div className='bg-[url("https://cdn.jsdelivr.net/gh/Mhdkaif0007/fyreHub@c6a9f7880510b95b7b619b8992eb99075645a64e/src/assets/0f2e53294568b34e8a183f3d1c295b6b4cc9a909.png")] h-[150px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/Mhdkaif0007/fyreHub@c6a9f7880510b95b7b619b8992eb99075645a64e/src/assets/0f2e53294568b34e8a183f3d1c295b6b4cc9a909.png")] h-[150px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/Mhdkaif0007/fyreHub@c6a9f7880510b95b7b619b8992eb99075645a64e/src/assets/0f2e53294568b34e8a183f3d1c295b6b4cc9a909.png")] h-[150px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/Mhdkaif0007/fyreHub@c6a9f7880510b95b7b619b8992eb99075645a64e/src/assets/0f2e53294568b34e8a183f3d1c295b6b4cc9a909.png")] h-[150px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/Mhdkaif0007/fyreHub@c6a9f7880510b95b7b619b8992eb99075645a64e/src/assets/0f2e53294568b34e8a183f3d1c295b6b4cc9a909.png")] h-[150px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/Mhdkaif0007/fyreHub@c6a9f7880510b95b7b619b8992eb99075645a64e/src/assets/0f2e53294568b34e8a183f3d1c295b6b4cc9a909.png")] h-[150px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/Mhdkaif0007/fyreHub@c6a9f7880510b95b7b619b8992eb99075645a64e/src/assets/0f2e53294568b34e8a183f3d1c295b6b4cc9a909.png")] h-[150px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/Mhdkaif0007/fyreHub@c6a9f7880510b95b7b619b8992eb99075645a64e/src/assets/0f2e53294568b34e8a183f3d1c295b6b4cc9a909.png")] h-[150px] w-[300px] rounded-xl bg-cover'></div>
                    <div className='bg-[url("https://cdn.jsdelivr.net/gh/Mhdkaif0007/fyreHub@c6a9f7880510b95b7b619b8992eb99075645a64e/src/assets/0f2e53294568b34e8a183f3d1c295b6b4cc9a909.png")] h-[150px] w-[300px] rounded-xl bg-cover'></div> */}
                </div>
            </div>


        </div>
    )
}
