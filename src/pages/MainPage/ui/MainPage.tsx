import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/CounterForTests';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <Page data-testid="MainPage">
      <Counter />
      {t('Главная страница')}
    </Page>
  );
};

export default MainPage;
