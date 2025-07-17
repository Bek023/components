import type { GroupProps } from "./GroupProps"
import VerticalGroup from "./VerticalGroup/VerticalGroup"
import HorizontalGroup from "./HorizontalGroup/HorizontalGroup"
const Group: React.FC<GroupProps> = (props) => {
    const { type } = props;

    switch (type) {
        case 'VGroup':
            return <VerticalGroup {...props} />;
        case 'HGroup':
            return <HorizontalGroup {...props} />
        default:
            console.warn("plase select correct type of input !")
            return <h1>Plase select correct type of input !</h1>;
    }
}
export default Group;