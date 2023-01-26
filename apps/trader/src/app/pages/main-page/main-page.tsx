/* eslint-disable no-irregular-whitespace */
import { MantineProvider, AppShell, Navbar, Text, Header, Group, Modal, ActionIcon, Image, ColorSchemeProvider, ColorScheme, Button, ThemeIcon, Anchor, List } from '@mantine/core';
import { IconSun, IconMoonStars, IconCheck, IconBan, IconTimeline, IconSwitch2, IconTool, IconQuestionMark } from '@tabler/icons';
import { useEffect, useState } from 'react';
import Logo from '../../../assets/img/logo-no-background.png'
import NavCryptoList from '../../components/nav-crypto-list/nav-crypto-list';
import Chart from '../../components/chart/chart';
import NavCurrency from '../../components/nav-currency/nav-currency';
import { setGlobalState, useGlobalState } from '../../config/states';
import MainInfo from '../../components/main-info/main-info';
import { useNavigate, useSearchParams } from 'react-router-dom';



/* eslint-disable-next-line */
export interface MainPageProps { }

export function MainPage(props: MainPageProps) {

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const dark = colorScheme === 'dark';

  const [params, setParams] = useSearchParams()
  const [openedData, setOpenedData] = useState(false);
  const [openedMACD, setOpenedMACD] = useState(false);
  const [openedRSI, setOpenedRSI] = useState(false);

  const navigate = useNavigate();


  useEffect(() => {
    if (params.get("currency") === null) {
      params.set('currency', 'usd');
      setParams(params);
    }
    if (params.get("cryptoId") === 'undefined' || null) {
      params.set('cryptoId', 'bitcoin');
      setParams(params);
    }
  }, [])

  // useEffect(() => {   
  //   console.log(params.get("currency"));
  //   console.log(params.get("cryptoId"));
  // }, [params])

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <AppShell
          padding="md"
          navbar={
            <Navbar width={{ base: 300 }} height={'100vh'} p="xs">{
              <div>
                <NavCurrency />
                <NavCryptoList />
              </div>
            }</Navbar>}
          header={
            <Header height={50} p="xs">{
              <Group position='apart'>
                <Group>
                  <Image
                    src={Logo}
                    width={100}
                  >
                  </Image>
                  <Anchor
                    href="/"
                    color={dark ? 'grape' : 'blue'}
                    size='lg'
                    weight='bold'
                  >
                    Home
                  </Anchor>
                </Group>



                <Group position='right'>

                  <Modal
                    opened={openedData}
                    onClose={() => setOpenedData(false)}
                    overflow="outside"
                    overlayOpacity={0.55}
                    overlayBlur={3}
                    size="50%"
                  >
                    <Text align='center' fz={40}
                    >
                      Podstawowe Histogramy  <ThemeIcon color='grape' variant="light">
                        <IconTimeline />
                      </ThemeIcon>
                    </Text>
                    <Text fz={20} fw={500} style={{ marginBottom: 8 }}>
                      <ThemeIcon color='grape' size="sm" variant="light">
                        <IconTool />
                      </ThemeIcon> Aktualne Ceny
                    </Text>
                    <Text style={{ marginBottom: 16 }}>
                      Wykres surowych cen kryptowalut pokazuje dane historyczne cen danej kryptowaluty w określonym przedziale czasowym. Zawiera on ceny zamknięcia dla każdego okresu. Wykres może być wyświetlany w różnych ramach czasowych, takich jak dzienne, tygodniowe, miesięczne, trzy miesiące lub roczne.<br />
                      Wykres surowy pozwala zobaczyć ruchy cen historycznych kryptowaluty i może być używany do identyfikowania trendów i wzorców na rynku.<br /> Dodatkowo, ten wykres może być używany do analizy technicznej, aby zidentyfikować ważne poziomy wsparcia i oporu i potencjalnie zidentyfikować sygnały kupna i sprzedaży.
                    </Text>
                    <Text fz={20} fw={500} style={{ marginBottom: 8 }}>
                      <ThemeIcon color='grape' size="sm" variant="light">
                        <IconTool />
                      </ThemeIcon> SMA (Simple Moving Average)
                    </Text>
                    <Text style={{ marginBottom: 16 }}>
                      SMA to wskaźnik techniczny, który polega na obliczaniu średniej arytmetycznej cen z określonego zakresu danych. Jest to jeden z najprostszych wskaźników trendu, który pomaga analizować ruchy cen na rynku.<br />
                      SMA jest obliczane przez sumowanie cen przez określony okres i dzielenie przez liczbę dni w tym okresie. Na przykład, jeśli chcesz obliczyć SMA z ostatnich 7 dni, sumujesz ceny tych 7 dni i dzielisz przez 7.<br />
                      Wykres SMA umożliwia łatwe rozpoznawanie trendów, często jest używany jako linia średniej ruchomej, która pomaga inwestorom ocenić, czy rynek jest w trendzie wzrostowym czy spadkowym.<br />
                      Wskaźnik SMA często jest używany w połączeniu z innymi wskaźnikami i analizami, aby uzyskać bardziej kompletny obraz rynku. <br />
                      Jednym z jego ograniczeń jest to, że nie uwzględnia cen z ostatnich dni bardziej niż inne.
                    </Text>
                    <Text fz={20} fw={500} style={{ marginBottom: 8 }}>
                      <ThemeIcon color='grape' size="sm" variant="light">
                        <IconTool />
                      </ThemeIcon> EMA (Exponential Moving Average)
                    </Text>
                    <Text style={{ marginBottom: 16 }}>
                      EMA to wskaźnik techniczny podobny do średniej kroczącej (SMA), ale kładzie więcej nacisku na ostatnie ceny, aby lepiej odzwierciedlić obecny trend na rynku.<br /> EMA jest obliczana przez zastosowanie współczynnika ważenia do najnowszych cen, z wagami malejącymi wykładniczo wraz z upływem czasu. Oznacza to, że najnowsze ceny mają większy wpływ na EMA niż starsze ceny.<br />
                      Wskaźnik ten często jest używana do identyfikacji trendów i generowania sygnałów kupna i sprzedaży. Gdy obecna cena jest powyżej EMA, jest to ogólnie uważane za oznakę trendu wzrostowego, podczas gdy gdy obecna cena jest poniżej EMA, jest to uważane za oznakę trendu spadkowego. Dodatkowo, przecięcia EMA mogą być również używane jako sygnał zmiany trendu. <br />
                      EMA jest uważana za bardziej reaktywną na ostatnie zmiany cen niż SMA, co czyni ją preferowaną opcją dla traderów, którzy chcą uchwycić krótkoterminowe ruchy na rynku. Niemniej jednak warto zauważyć, że EMA generuje również więcej sygnałów i może prowadzić do większej liczby fałszywych sygnałów niż SMA.
                    </Text>
                    <Text fz={20} fw={500} style={{ marginBottom: 8 }}>
                      <ThemeIcon color='grape' size="sm" variant="light">
                        <IconSwitch2 />
                      </ThemeIcon> Porównanie SMA z EMA
                    </Text>
                    <Text style={{ marginBottom: 16 }}>
                      SMA i EMA to wskaźniki techniczne używane w analizie rynku finansowego do określania trendów. <br />
                      SMA jest średnią arytmetyczną ostatnich n cen, podczas gdy EMA jest średnią ważoną, która kładzie większy nacisk na najnowsze ceny.  <br />
                      Oba wskaźniki służą do określania trendów i sygnałów kupna lub sprzedaży. EMA jest często uważana za bardziej dokładną niż SMA, ponieważ kładzie większy nacisk na najnowsze dane.
                    </Text>
                    <Text fz={20} fw={500} style={{ marginBottom: 8 }}>
                      <ThemeIcon color='grape' size="sm" variant="light">
                        <IconQuestionMark />
                      </ThemeIcon> Zalety i wady wskaźników SMA i EMA:
                    </Text>
                    <Text fz={16} fw={500} style={{ marginBottom: 8 }}>
                      Zalety SMA:
                    </Text>
                    <List withPadding>
                      <List.Item icon={
                        <ThemeIcon color="green" size={24} radius="xl">
                          <IconCheck size={16} />
                        </ThemeIcon>
                      }>Łatwy do zrozumienia.</List.Item>
                      <List.Item icon={
                        <ThemeIcon color="green" size={24} radius="xl">
                          <IconCheck size={16} />
                        </ThemeIcon>
                      }>Nie wymaga skomplikowanych kalkulacji.</List.Item>
                      <List.Item icon={
                        <ThemeIcon color="green" size={24} radius="xl">
                          <IconCheck size={16} />
                        </ThemeIcon>
                      }>Jest stabilny i niepodatny na zmiany składu danych.
                      </List.Item>
                    </List>
                    <Text fz={16} fw={500} style={{ marginBottom: 8 }}>
                      Wady SMA:
                    </Text>
                    <List withPadding style={{ marginBottom: 16 }}>
                      <List.Item icon={
                        <ThemeIcon color="red" size={24} radius="xl">
                          <IconBan size={16} />
                        </ThemeIcon>
                      }>Niezbyt dobrze radzi sobie z ostatnimi zmianami cen.</List.Item>
                      <List.Item icon={
                        <ThemeIcon color="red" size={24} radius="xl">
                          <IconBan size={16} />
                        </ThemeIcon>
                      }>Może generować fałszywe sygnały, zwłaszcza przy niestabilnych rynkach.</List.Item>
                    </List>
                    <Text fz={16} fw={500}>
                      Zalety EMA:
                    </Text>
                    <List withPadding>
                      <List.Item icon={
                        <ThemeIcon color="green" size={24} radius="xl">
                          <IconCheck size={16} />
                        </ThemeIcon>
                      }>Bardziej reaktywny na ostatnie zmiany cen niż SMA.</List.Item>
                      <List.Item icon={
                        <ThemeIcon color="green" size={24} radius="xl">
                          <IconCheck size={16} />
                        </ThemeIcon>
                      }>Może pomóc w identyfikacji trendów i generowaniu sygnałów kupna/sprzedaży.</List.Item>
                    </List>
                    <Text fz={16} fw={500} style={{ marginBottom: 8 }}>
                      Wady EMA:
                    </Text>
                    <List withPadding>
                      <List.Item icon={
                        <ThemeIcon color="red" size={24} radius="xl">
                          <IconBan size={16} />
                        </ThemeIcon>
                      }>Bardziej skomplikowany w obliczeniach niż SMA.
                      </List.Item>
                      <List.Item icon={
                        <ThemeIcon color="red" size={24} radius="xl">
                          <IconBan size={16} />
                        </ThemeIcon>
                      }>Może generować więcej fałszywych sygnałów niż SMA.</List.Item>
                    </List>
                  </Modal>
                  <Button
                    variant='subtle'
                    color={dark ? 'grape' : 'blue'}
                    onClick={() => setOpenedData(true)}
                  >
                    Histogramy
                  </Button>
                  <Modal
                    opened={openedMACD}
                    onClose={() => setOpenedMACD(false)}
                    overflow="outside"
                    overlayOpacity={0.55}
                    overlayBlur={3}
                    size="50%"
                  >
                    <Text align='center' fz={40}
                    >
                      Wskaźnik MACD <ThemeIcon color='grape' variant="light">
                        <IconTimeline />
                      </ThemeIcon>
                    </Text>
                    <Text fz={20} fw={500} style={{ marginBottom: 8 }}>
                      <ThemeIcon color='grape' size="sm" variant="light">
                        <IconTool />
                      </ThemeIcon> MACD (Moving Average Convergence Divergence)
                    </Text>
                    <Text style={{ marginBottom: 16 }}>
                      <Text style={{ marginBottom: 8 }}>
                        MACD to wskaźnik techniczny, który służy do identyfikacji zmian tempa i trendu. Jest on obliczany przez odejmowanie 26-okresowej średniej kroczącej ważonej (EMA) od 12-okresowej EMA. Wynikiem jest linia, która oscyluje wokół zera i nazywana jest linią MACD. Dodatkowo na wykresie jest rysowana 9-okresowa EMA linii MACD, która nazywana jest linią sygnałową.<br />
                      </Text>
                      <Text style={{ marginBottom: 8 }}>
                        Linia MACD i linia sygnału są używane razem do generowania sygnałów kupna i sprzedaży. Kiedy linia MACD przebiega powyżej linii sygnału, jest to uważane za sygnał byka, co oznacza, że ​​momentum przesuwa się ku górze i może być dobrym czasem na zakup. Przeciwnie, kiedy linia MACD przebiega poniżej linii sygnału, jest to uważane za sygnał niedźwiedzia, co oznacza, że ​​momentum przesuwa się ku dołowi i może być dobrym czasem na sprzedaż.<br />
                      </Text>
                      <Text style={{ marginBottom: 8 }}>
                        MACD to uniwersalny wskaźnik, który może być używany w różnych ramach czasowych i dla różnych rynków. Często jest używany w połączeniu z innymi wskaźnikami i analizami, aby potwierdzać trendy i identyfikować potencjalne okazje do kupna i sprzedaży.
                      </Text>
                      <Text fz={20} fw={500} style={{ marginBottom: 8 }}>
                        <ThemeIcon color='grape' size="sm" variant="light">
                          <IconQuestionMark />
                        </ThemeIcon> Zalety i wady wskaźnika MACD:
                      </Text>
                      <Text fz={16} fw={500} style={{ marginBottom: 8 }}>
                        Zalety:
                      </Text>
                      <List withPadding>
                        <List.Item icon={
                          <ThemeIcon color="green" size={24} radius="xl">
                            <IconCheck size={16} />
                          </ThemeIcon>
                        }>Pomaga w identyfikacji zmian trendów i momentum na rynku, umożliwiając szybszą reakcję na zmiany cen.</List.Item>
                        <List.Item icon={
                          <ThemeIcon color="green" size={24} radius="xl">
                            <IconCheck size={16} />
                          </ThemeIcon>
                        }>Generuje sygnały kupna i sprzedaży, umożliwiając lepsze wykorzystanie okazji inwestycyjnych.</List.Item>
                        <List.Item icon={
                          <ThemeIcon color="green" size={24} radius="xl">
                            <IconCheck size={16} />
                          </ThemeIcon>
                        }>Jest uniwersalny i może być używany w różnych przedziałach czasowych i na różnych rynkach.</List.Item>
                      </List>
                      <Text fz={16} fw={500} style={{ marginBottom: 8 }}>
                        Wady:
                      </Text>
                      <List withPadding>
                        <List.Item icon={
                          <ThemeIcon color="red" size={24} radius="xl">
                            <IconBan size={16} />
                          </ThemeIcon>
                        }>Może generować fałszywe sygnały, szczególnie w niestabilnych rynkach.
                        </List.Item>
                        <List.Item icon={
                          <ThemeIcon color="red" size={24} radius="xl">
                            <IconBan size={16} />
                          </ThemeIcon>
                        }>Nie bierze pod uwagę wszystkich czynników wpływających na rynek, dlatego powinien być używany z innymi wskaźnikami i analizami.</List.Item>
                        <List.Item icon={
                          <ThemeIcon color="red" size={24} radius="xl">
                            <IconBan size={16} />
                          </ThemeIcon>
                        }>Opóźnione sygnały, szczególnie w porównaniu do wskaźników wiodących.
                        </List.Item>
                        <List.Item icon={
                          <ThemeIcon color="red" size={24} radius="xl">
                            <IconBan size={16} />
                          </ThemeIcon>
                        }>Brak konkretnych rekomendacji dotyczących poziomów stop loss lub take profit.</List.Item>
                      </List>
                    </Text>
                  </Modal>
                  <Button
                    variant='subtle'
                    color={dark ? 'grape' : 'blue'}
                    onClick={() => setOpenedMACD(true)}
                  >
                    MACD
                  </Button>
                  <Modal
                    opened={openedRSI}
                    onClose={() => setOpenedRSI(false)}
                    overflow="outside"
                    overlayOpacity={0.55}
                    overlayBlur={3}
                    size="50%"
                  >
                    <Text align='center' fz={40}
                    >
                      Wskaźnik RSI  <ThemeIcon color='grape' variant="light">
                        <IconTimeline />
                      </ThemeIcon>
                    </Text>
                    <Text fz={20} fw={500} style={{ marginBottom: 8 }}>
                      <ThemeIcon color='grape' size="sm" variant="light">
                        <IconTool />
                      </ThemeIcon> RSI (Relative Strength Index)
                    </Text>
                    <Text style={{ marginBottom: 16 }}>
                      <Text style={{ marginBottom: 8 }}>
                        RSI to wskaźnik momentu, który jest używany do mierzenia siły ruchu cenowego aktywa. Porównuje on wielkość ostatnich zysków do ostatnich strat w celu określenia stanu przepływu i przepływu aktywa.
                      </Text>
                      <Text style={{ marginBottom: 8 }}>
                        Jest to obliczany przez dzielenie średniego zysku okresów wzrostowych przez średnią stratę okresów spadkowych, a następnie przekształca wynik w wartość między 0 a 100.
                      </Text>
                      <Text style={{ marginBottom: 8 }}>
                        Przeważnie odczyt RSI powyżej 70 uważany jest za przewartościowany, co oznacza, że aktywo może być skłonne do korekty cenowej, natomiast odczyt poniżej 30 uważany jest za niedowartościowany, co oznacza, że aktywo może być pod ceną i skłonne do wzrostu cenowego.
                      </Text>
                      <Text style={{ marginBottom: 8 }}>
                        RSI może być również używany do generowania sygnałów kupna i sprzedaży. Sygnał byka jest generowany, gdy RSI przekracza poziom 30, co oznacza, że aktywo może być zaniżone i przysługuje mu wzrost ceny. Sygnał niedźwiedzia jest generowany, gdy RSI przekracza poziom 70, co oznacza, że aktywo może być przewartościowane i przysługuje mu korekta ceny.
                      </Text>
                      <Text style={{ marginBottom: 8 }}>
                        Warto zauważyć, że RSI może również pozostawać w strefie przewartościowania lub przepłycenia przez dłuższy czas, dlatego powinien być używany w połączeniu z innymi wskaźnikami i analizami, aby potwierdzić trendy i rozpoznać potencjalne okazje do kupna i sprzedaży.
                      </Text>
                      <Text fz={20} fw={500} style={{ marginBottom: 8 }}>
                        <ThemeIcon color='grape' size="sm" variant="light">
                          <IconQuestionMark />
                        </ThemeIcon> Zalety i wady wskaźnika MACD:
                      </Text>
                      <Text fz={16} fw={500} style={{ marginBottom: 8 }}>
                        Zalety:
                      </Text>
                      <List withPadding>
                        <List.Item icon={
                          <ThemeIcon color="green" size={24} radius="xl">
                            <IconCheck size={16} />
                          </ThemeIcon>
                        }>Pomaga w identyfikacji warunków rynku przecenionego i przewartościowanego, co pozwala na lepsze zarządzanie ryzykiem.</List.Item>
                        <List.Item icon={
                          <ThemeIcon color="green" size={24} radius="xl">
                            <IconCheck size={16} />
                          </ThemeIcon>
                        }>Generuje sygnały kupna i sprzedaży, umożliwiając lepsze wykorzystanie okazji inwestycyjnych.</List.Item>
                        <List.Item icon={
                          <ThemeIcon color="green" size={24} radius="xl">
                            <IconCheck size={16} />
                          </ThemeIcon>
                        }>Prosty do zrozumienia i interpretacji.
                        </List.Item>
                      </List>
                      <Text fz={16} fw={500} style={{ marginBottom: 8 }}>
                        Wady:
                      </Text>
                      <List withPadding>
                        <List.Item icon={
                          <ThemeIcon color="red" size={24} radius="xl">
                            <IconBan size={16} />
                          </ThemeIcon>
                        }>Może generować fałszywe sygnały, szczególnie w niestabilnych rynkach.
                        </List.Item>
                        <List.Item icon={
                          <ThemeIcon color="red" size={24} radius="xl">
                            <IconBan size={16} />
                          </ThemeIcon>
                        }>Często używany jako jedyny wskaźnik, co może prowadzić do błędnych decyzji inwestycyjnych.</List.Item>
                        <List.Item icon={
                          <ThemeIcon color="red" size={24} radius="xl">
                            <IconBan size={16} />
                          </ThemeIcon>
                        }>Opóźnione sygnały, szczególnie w porównaniu do wskaźników wiodących.</List.Item>
                        <List.Item icon={
                          <ThemeIcon color="red" size={24} radius="xl">
                            <IconBan size={16} />
                          </ThemeIcon>
                        }>Brak konkretnych rekomendacji dotyczących poziomów stop loss lub take profit.</List.Item>
                      </List>
                    </Text>
                  </Modal>
                  <Button
                    variant='subtle'
                    color={dark ? 'grape' : 'blue'}
                    onClick={() => setOpenedRSI(true)}
                  >
                    RSI
                  </Button>



                  <ActionIcon
                    variant="outline"
                    color={dark ? 'yellow' : 'blue'}
                    onClick={() => {
                      toggleColorScheme();
                      if (dark === true) {
                        setGlobalState("currentTheme", 'dark');
                      } else {
                        setGlobalState("currentTheme", 'light');
                      }
                    }}
                    title="Toggle color scheme"
                  >
                    {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                  </ActionIcon>
                </Group></Group>
            }
            </Header>}
          styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
          })}
        >
          <MainInfo />

          <Chart />



        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MainPage;
