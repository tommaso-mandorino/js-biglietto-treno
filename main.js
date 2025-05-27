// #region Constants declaration section

    // Defined price for 1 km
    const KM_PRICE = 0.21;

    // Defined underage age
    const UNDERAGE_AGE = 18;
    // Defined underage discount percentage
    const UNDERAGE_DISCOUNT_PERCENTAGE = 20;

    // Defined senior age
    const SENIOR_AGE = 65;
    // Defined senior discount percentage
    const SENIOR_DISCOUNT_PERCENTAGE = 40;

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

    // #region Discount application section

        // IF passenger age is underage
        if ( passengerAge < UNDERAGE_AGE ) {

            // Apply underage discount
            totalTravelPrice = totalTravelPrice - ( (totalTravelPrice / 100 ) * UNDERAGE_DISCOUNT_PERCENTAGE );

        }
        // ELSE IF passenger age is senior 
        else if ( passengerAge > SENIOR_AGE ) {

            // Apply senior discount
            totalTravelPrice = totalTravelPrice - ( (totalTravelPrice / 100 ) * SENIOR_DISCOUNT_PERCENTAGE );

        }

    // #endregion Discount application section

// #endregion Travel price calculation section



// #region Output section

    // Price rounding
    totalTravelPrice = totalTravelPrice.toFixed(2);

    // Price formatting for italian comma price format
    totalTravelPrice = totalTravelPrice.toString().replace('.', ',');

    // Price output
    alert('Il prezzo totale del viaggio è di: ' + totalTravelPrice + " €");

    /*
        Reload the page for infinite calculations
        (no problems for the browser navigation since alert doesn't impose on other tabs)
    */
    location.reload();

// #endregion Output section