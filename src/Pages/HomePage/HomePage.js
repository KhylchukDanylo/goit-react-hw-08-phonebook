import { useAuth } from 'hooks/useAuth';
import { TextHome, InstHome, DivHome } from './HomePage.styled';

export default function HomePage() {
  const { isLoggedIn } = useAuth();

  return (
    <DivHome>
      <TextHome>Welcome to page contactsApp</TextHome>
      {!isLoggedIn && (
        <InstHome>To start work, you need to register or log in.</InstHome>
      )}
      {isLoggedIn && <InstHome>Thank you for using our site.</InstHome>}
    </DivHome>
  );
}
