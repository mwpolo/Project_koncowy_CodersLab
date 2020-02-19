import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Help = () => {
  return (
    <div className="help_wrapper">
      <h1 id='help_topPage'>
        Informacje dotyczące korzystania z aplikacji.
      </h1>
      <br />
      <h2>
        Menu główne
      </h2>
      <nav>
        <p>
          Menu główne umieszczone jest w górnej czesci ekranu i składa się z 6 przycisków:
        </p>

        <ul>
          <li><Link to="#help_makeOrder">Utwórz </Link> - służy do tworzenia zamówienia</li>
          <li><Link to='#help_summaryOrder'>Podsumuj</Link> - służy do prezentacji zamówienia</li>
          <li><Link to='#help_printOrder'>Drukuj</Link> - służy do wydruku zamówienia lub zapisu do pliku .pdf</li>
          <li><Link to='#help_loadOrder'>Wczytaj</Link> - służy do wczytania  zamówienia z dysku</li>
          <li><Link to='#help_saveOrder'>Zapisz</Link> - służy do zapisania zamówienia na dysk w formacie .csv</li>
          <li><Link to='#help_help'>Pomoc</Link> -to ekran pomocy , który właśnie przeglądasz </li>

        </ul>
        <p>Szczegółowe informacje dotyczace wykorzystania powyższych funkcji uzyskasz   klikając na dowolną z nich.
        </p>


      </nav>
      <br />
      <section>
        <h3 id="help_makeOrder">1. Panel - Utwórz</h3>
        <h4>1.1 Widok ogólny </h4>
        <div className="helpScreens">
          <img className="helpScreens" src="./helpScreens/makeOrder-screen.jpg" alt="makeOrder panel" />
        </div>
        <p>
          Na zdjęciu przedstawiony jest widok ekranu po naciśnięciu  przycisku <strong>UTWÓRZ</strong> przed rozpoczęciem dodawania produktów do zamówienia.
          <br />
          <br />

          Idąc od góry mamy :
          </p>

        <ul>
          <li>pola formularza dla dodawanego produktu;</li>
          <li>dwa przyciski "Dodaj do zamówienia" oraz "Reset zamówienia"</li>
          <li>po prawej stronie panel z produktami</li>
          <li>nad panelem z produktami - pole wyboru prezentowanych produktów</li>
          <li>po lewej stronie miejsce gdzie będą wyświetlane produkty dodane do zamówienia </li>
          <li>nad panelem zamówionych produktów - pole wyboru sortowania produktów dodanych do zamówienia</li>
        </ul>
        <h4>
          1.2 Tworzenie zamówienia
        </h4>
        <ol>
          <li>Kliknij na zdjęcie produktu;</li>
          <li>Wpisz w polu formularza ilość zamawianych produktów;</li>
          <li>Jeśli zamawiasz spinery GB - wpisz w polu formularza "UWAGI" czy ma być dodany kryształ czy kula;</li>
          <li>Wpisz nr zamówienia - możesz to zrobić teraz lub później np. pod koniec dodawania produktów do zamówienia </li>
          <li>Kliknij przycisk " Dodaj do zamówienia" lub wciśnij klawisz "Enter"; </li>


        </ol>
        <p>
          <strong>Uwagi:</strong>
          <br />

          Nowo dodany produkt zostanie umieszczony w pierwszej linii zamówienia.
          <br />
          Najlepszym i najbezpieczniejszym sposobem tworzenia zamówienia jest sposób zaprezentowany powyżej.
          <br />
          Program sam uzupełnia większość danych , które pobiera ze swojej bazy danych.
          <br />
          Oczywiście można wypełniać wszystkie pola formularza ręcznie , <span style={{ fontWeight: "bold", color: "red" }}>ale będzie to czasochłonne, a ponadto istnieje ryzyko wprowadzenia błednych danych np. kodów produtów.</span>
        </p>
        <h4>
          1.3 Zmiana lub usunięcie pozycji z zamówienia
        </h4>
        <div className="helpScreens">
          <img className="helpScreens" src="./helpScreens/makeOrder-screen1.jpg" alt="makeOrder panel" />
        </div>

        <p>
          W celu <strong>usunięcia</strong> danej pozycji z zamówienia należy kliknąć przycisk "USUŃ" i wybrana pozycja zostanie usunięta z tworzonego zamówienia.
        </p>
        <p>
          W celu <strong>zmiany</strong> danej pozycji w zamówieniu należy:
        </p>
        <ol>
          <li>Kliknać przycisk "ZMIEŃ" w linii produktu , który chcemy zmienić. Spowoduje to  usunięcie danej pozycji z zamówienia i przeniesienie jej do pól formularza produktu;</li>
          <li>W polu formularza dokonać pożądanych zmian;</li>
          <li> Kliknąć przycisk "Dodaj do zamówienia", aby dodać poprawione dane do zamówienia.</li>
        </ol>
        <p>
          Poprawiony produkt zostanie dodany w pierwszej linii zamówienia.
          </p>
        <h4>1.4 Resetowanie zamówienia</h4>
        <p>
          W celu <strong>usunięcia wszystkich produktów</strong>  z zamówienia należy kliknąć przycisk "RESET" a następnie wpisać 'tak' w celu potwierdzenia tej operacji.
          <br />
          <span style={{ fontWeight: "bold", color: "red" }}>Resetowanie zamówienia jest operacją nieodwracalną i nie ma możliwości, aby ją cofnąć.
          </span>
        </p>

      </section>
      <Link to="#help_topPage"><button className='help_topPage'> Powrót na początek strony</button> </Link>

      <section>
        <h3 id="help_summaryOrder">2. Podsumuj</h3>
        <h4>2.1 Widok ogólny </h4>
        <div className="helpScreens">
          <img className="helpScreens" src="./helpScreens/summaryOrder-screen.jpg" alt="summaryOrder panel" />
        </div>
        <p>
          W panelu tym prezentowane jest aktualne zamówienie zawierające podział wszystkich produktów na poszczególne kategorie oraz ich zsumowanie w poszczególnych kategoriach.
        </p>
        <h4>2.2 Wydruk podsumowania </h4>
        <div className="helpScreens">
          <img className="helpScreens" src="./helpScreens/summaryOrder-screen1.jpg" alt="summaryOrder panel" />
        </div>
        <p>
          Klikając przycisk "Drukuj podsumowanie" można wydrukować podsumowanie zamówienia, ewentualnie zapisać je do pliku .pdf - o ile sterowniki wydruku to umożliwiają.
        </p>
      </section>
      <Link to="#help_topPage"><button className='help_topPage'> Powrót na początek strony</button> </Link>

      <section>
        <h3 id="help_printOrder">3. Drukuj</h3>
        <h4>3.1 Widok ogólny </h4>
        <div className="helpScreens">
          <img className="helpScreens" src="./helpScreens/printOrder-screen.jpg" alt="printOrder panel" />
        </div>
        <h4>3.2 Wydruk zamówienia </h4>
        <p>
          Klikając przycisk "Drukuj zamówienie" można wydrukować podsumowanie zamówienia, ewentualnie zapisać je do pliku .pdf - o ile sterowniki wydruku to umożliwiają.
          <br />
          <strong>
            Uwaga:
          </strong>
          <br />
          Zamówienie zostanie wydrukowane w takiej kolejności w jakiej zostało posortowane w panelu tworzenia zamówienia "UTWÓRZ".
        </p>
      </section>
      <Link to="#help_topPage"><button className='help_topPage'> Powrót na początek strony</button> </Link>

      <section>
        <h3 id="help_loadOrder">4. Wczytaj</h3>
        <h4>4.1 Widok ogólny </h4>
        <p>Przed wczytaniem zamówienia</p>
        <div className="helpScreens">
          <img className="helpScreens" src="./helpScreens/loadOrder-screen.jpg" alt="loadOrder panel" />
        </div>
        <h4>4.2 Wczytanie ostatnio edytowanego zamówienia </h4>
        <p>Program umożliwia wczytanie ostatnio edytowanego zamówienia. Może to być   przydatne w sytuacji omyłkowego zamknięcia okna przeglądarki lub gdy chcemy kontynuować tworzenie zamówienia po jakimś czasie.
          <br />
          Aby załadować ostatnio edytowane zamówienie kliknij w przycisk "Wczytaj ostatnio edytowane zamówienie".
          <br /><br />
          Widok po wczytaniu zamówienia
        </p>
        <div className="helpScreens">
          <img className="helpScreens" src="./helpScreens/loadOrder-screen1.jpg" alt="loadOrder panel" />
        </div>
        <h4>4.2 Wczytanie zamówienia z dysku </h4>
        <p>
          Jeśli uprzednio zapisaliśmy nasze zamówienie na dysk możemy je również tu wczytać.
          <br />    Aby to zrobić należy kliknąć przycisk "Wybierz i załaduj plik z dysku". Po kliknięciu otworzy się okno, w którym należy wybrać plik docelowy, a nastepnie potwierdzić jego wybór.
          <br />
          <br />
          <strong>
            Uwaga:
        </strong>
          <br />
          Można wczytać wyłacznie pliki w formacie .csv, które wcześniej zostały  zapisane przez ten program. <br />
          Próby wczytania innych plikow , spowodują jego nieprawidłowe działanie.
        <br /><br />

        </p>
        <div className="helpScreens">
          <img className="helpScreens" src="./helpScreens/loadOrder-screen2.jpg" alt="loadOrder panel" />
        </div>
      </section>
      <Link to="#help_topPage"><button className='help_topPage'> Powrót na początek strony</button> </Link>

      <section>
        <h3 id="help_saveOrder">5. Zapisz</h3>
        <h4>5.1 Widok ogólny </h4>
        <div className="helpScreens">
          <img className="helpScreens" src="./helpScreens/saveOrder-screen.jpg" alt="saveOrder panel" />
        </div>
        <p>
          Aby zapisać plik w formacie .csv na dysk, należy wpisać jego nazwę w pole formularza - jeśli chcemy aby plik miał inna nazwę niż numer zamówienia.
          Nazwa pliku musi składać się z minimum 3 znaków.
          <br />
          Jeśli nazwa pliku ma pozostać taka sama jak numer zamówienia wówczas program samoczynnie nada mu tą nazwę.
          <br /><br />
          <strong>
            Uwaga:
          </strong>
          <br />
          Niektóre znaki są niedopuszczalne w nazwach plików - program pokaże otrzeżenie przy próbie wprowadzenia takiego znaku.
          <br /><br />
        </p>
        <div className="helpScreens">
          <img className="helpScreens" src="./helpScreens/saveOrder-screen1.jpg" alt="saveOrder panel" />
        </div>
      </section>
      <Link to="#help_topPage"><button className='help_topPage'> Powrót na początek strony</button> </Link>

      <section>
        <h3 id="help_help">6. Pomoc</h3>
        <p>
          To panel , który właśnie przegladasz.
      </p>
      </section>
      <Link to="#help_topPage"><button className='help_topPage'> Powrót na początek strony</button> </Link>




    </div >

  );
}

export default Help;