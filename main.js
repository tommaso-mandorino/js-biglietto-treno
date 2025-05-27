// #region Constants declaration section

    // Defined price for 1 km
    const KM_PRICE = 0.21;

// #endregion Constants declaration section


// #region User data obtaining section

    // Get kilometer number from the user
    const kmNumber = Number(prompt('Inserisci il numero di km che vuoi percorrere:'));

    // Get passenger age from the user
    const passengerAge = Number(prompt('Inserisci l\'età del passeggero:'));

// #endregion User data obtaining section



// #region Travel price calculation section

    // Calculate total travel price
    let totalTravelPrice = kmNumber * KM_PRICE;

// #endregion Travel price calculation section



// #region Output section

    // Output formatting for italian price format
    totalTravelPrice = totalTravelPrice.toString().replace('.', ',');

    console.log('Il prezzo totale del viaggio è di: ' + totalTravelPrice + " €");

// #endregion Output section