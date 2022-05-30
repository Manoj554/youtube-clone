import { MdVideoLibrary, MdSubscriptions, MdExplore, MdHome } from 'react-icons/md';

type Toogle = {
    toggle: boolean;
}

const SideBar = ({ toggle }: Toogle) => {
    return (
        <section className={`hidden lg:block fixed top-16 left-0 ${toggle ? 'w-60 py-5  overflow-y-hidden hover:overflow-y-scroll' : 'w-[72px] py-4'}  h-screen bg-primary`}>
            <div className="flex flex-col items-center pb-4 border-b border-b-secondary">
                <button className={`${toggle ? 'sideBarNavigation' : 'sideBarButton'}`}>
                    <MdHome className='iconSize' />
                    <p>Home</p>
                </button>
                <button className={`${toggle ? 'sideBarNavigation' : 'sideBarButton'}`}>
                    <MdExplore className='iconSize' />
                    <p>Explore</p>
                </button>
                <button className={`${toggle ? 'sideBarNavigation' : 'sideBarButton'}`}>
                    <MdSubscriptions className='iconSize' />
                    <p>SubScription</p>
                </button>
                <button className={`${toggle ? 'sideBarNavigation' : 'sideBarButton'}`}>
                    <MdVideoLibrary className='iconSize' />
                    <p>Library</p>
                </button>
            </div>

            <div className={`${toggle ? "flex flex-col items-center py-4 border-b border-b-secondary" : 'hidden'}`}>
                <button className={`${toggle ? 'sideBarNavigation' : 'sideBarButton'}`}>
                    <MdHome className='iconSize' />
                    <p>Home</p>
                </button>
                <button className={`${toggle ? 'sideBarNavigation' : 'sideBarButton'}`}>
                    <MdExplore className='iconSize' />
                    <p>Explore</p>
                </button>
                <button className={`${toggle ? 'sideBarNavigation' : 'sideBarButton'}`}>
                    <MdSubscriptions className='iconSize' />
                    <p>SubScription</p>
                </button>
                <button className={`${toggle ? 'sideBarNavigation' : 'sideBarButton'}`}>
                    <MdVideoLibrary className='iconSize' />
                    <p>Library</p>
                </button>
            </div>
            <div className={`${toggle ? "flex flex-col items-center py-4 border-b border-b-secondary" : 'hidden'}`}>
                <button className={`${toggle ? 'sideBarNavigation' : 'sideBarButton'}`}>
                    <MdHome className='iconSize' />
                    <p>Home</p>
                </button>
                <button className={`${toggle ? 'sideBarNavigation' : 'sideBarButton'}`}>
                    <MdExplore className='iconSize' />
                    <p>Explore</p>
                </button>
                <button className={`${toggle ? 'sideBarNavigation' : 'sideBarButton'}`}>
                    <MdSubscriptions className='iconSize' />
                    <p>SubScription</p>
                </button>
                <button className={`${toggle ? 'sideBarNavigation' : 'sideBarButton'}`}>
                    <MdVideoLibrary className='iconSize' />
                    <p>Library</p>
                </button>
            </div>
            <div className={`${toggle ? "flex flex-col items-center py-4" : 'hidden'}`}>
                <button className={`${toggle ? 'sideBarNavigation' : 'sideBarButton'}`}>
                    <MdHome className='iconSize' />
                    <p>Home</p>
                </button>
                <button className={`${toggle ? 'sideBarNavigation' : 'sideBarButton'}`}>
                    <MdExplore className='iconSize' />
                    <p>Explore</p>
                </button>
                <button className={`${toggle ? 'sideBarNavigation' : 'sideBarButton'}`}>
                    <MdSubscriptions className='iconSize' />
                    <p>SubScription</p>
                </button>
                <button className={`${toggle ? 'sideBarNavigation' : 'sideBarButton'}`}>
                    <MdVideoLibrary className='iconSize' />
                    <p>Library</p>
                </button>
            </div>
        </section>
    )
}

export default SideBar