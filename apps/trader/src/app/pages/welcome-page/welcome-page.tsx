/* eslint-disable jsx-a11y/alt-text */
import { AppShell, Button, Group } from '@mantine/core';
import styles from './welcome-page.module.scss';
import ChartImg from '../../../assets/img/chartImg.png'
import { useNavigate } from "react-router-dom";
import { IconRun } from '@tabler/icons';



/* eslint-disable-next-line */
export interface WelcomePageProps { }

export function WelcomePage(props: WelcomePageProps) {

  const navigate = useNavigate();

  return (
    <div>
      <AppShell
        padding="md"
      >
        <div className='grid-container' style={{ height: '92vh', display: 'flex', justifyContent: 'center' }}>
          <div className='left' style={{ width: '40vw', height: '90vh', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '80%', marginTop: 'auto', marginBottom: 'auto' }}>
              <h1 className='title' style={{
                fontFamily: '"Unbounded", sans-serif',
                fontSize: 80,
                color: '#66023C'
              }}>
                TRADER
              </h1>
              <h2 style={{
                fontFamily: '"Unbounded", sans-serif',
                fontSize: 45,
                fontWeight: 500,
                color: '#66023C'
              }}>
                Prosty sposób, aby rozpocząć przygodę z inwestowaniem w kryptowaluty
              </h2>
              <Group position='center'>
                <Button
                  leftIcon={<IconRun />}
                  variant="gradient"
                  gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
                  size='xl'
                  radius="xl"
                  onClick={() => navigate('/chart')}
                >
                  Zaczynamy</Button>
              </Group>
            </div>
          </div>
          <div className='right' style={{ width: '55vw', height: '90vh' }}>
            <img style={{ marginLeft: '5%', maxWidth: '100%', maxHeight: '100%' }} src={ChartImg}></img>
          </div>
        </div>
      </AppShell>

    </div>);
}

export default WelcomePage;

