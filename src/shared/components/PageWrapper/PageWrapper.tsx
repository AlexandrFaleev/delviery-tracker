import {Header} from "@shared/components/PageWrapper/Header";
import {useMediaQuery} from 'react-responsive'


const PageWrapper = ({children}:React.PropsWithChildren) => {
    const deviceType:string = useMediaQuery({query: 'screen and (max-width: 768px)'})
        ? 'mobile' : 'desktop';

    return (
        <>
            <Header type={deviceType}/>
            {children}
        </>
    )
}

export default PageWrapper;