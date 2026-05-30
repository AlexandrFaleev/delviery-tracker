import {Header} from "@shared/components/PageWrapper/Header";
import {Footer} from "@shared/components/PageWrapper/Footer";
import {useMediaQuery} from 'react-responsive';
import s from './PageWrapper.module.scss';

const PageWrapper = ({children}:React.PropsWithChildren) => {
    const deviceType:string = useMediaQuery({query: 'screen and (max-width: 768px)'})
        ? 'mobile' : 'desktop';

    return (
        <>
            <Header type={deviceType}/>
                <div className={s.main}>
                    {children}
                </div>
            <Footer type={deviceType}/>
        </>
    )
}

export default PageWrapper;