import { useNavigate } from 'react-router-dom';

import {
    BackgroundImage,
    DirectoryBodyContainer,
    DirectoryItemContainer,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage alt={title} $imageUrl={imageUrl} />

            <DirectoryBodyContainer>
                <h2>{title}</h2>

                <p>Shop Now</p>
            </DirectoryBodyContainer>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;
