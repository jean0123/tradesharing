<template id="how">
    <div class="why">
        <div class="why__title">
            <span class="why__title__text1">Why TradeSharing?</span>
            <span class="why__title__text2">Portfolio liquidation is common today. Major exchanges create bots to track your positions, anticipate your movement and bet against you. How can you beat the big whales?</span>
        </div>
        <div class="why__table">
            <div class="why__table__row1">
                <div class="why__table__row1__col">
                    <div class="why__table__row1__a__icon">
                        <img src="../assets/why/Group 34667.svg" alt="" />
                    </div>
                    <div class="why__table__row1__a__text">
                        <span class="why__table__row1__a__text__a">Uncover your position</span>
                        <span class="why__table__row1__a__text__b">Avoid exchange to know your liquidation price</span>
                    </div>
                    <div class="why__table__row1__a__rectangle"></div>
                </div>
                <div class="why__table__row1__col">
                    <div class="why__table__row1__b__icon">
                        <img src="../assets/why/Group 34630.svg" alt="" />
                    </div>
                    <div class="why__table__row1__b__text">
                        <span class="why__table__row1__b__text__a">Decentralize your orders</span>
                        <span class="why__table__row1__b__text__b">Avoid exchange to track your history and predict your movements</span>
                    </div>
                    <div class="why__table__row1__b__rectangle"></div>
                </div>
            </div>
            <div class="why__table__row2">
                <div class="why__table__row2__col">
                    <div class="why__table__row2__a__icon">
                        <img src="../assets/why/Group 34650.svg" alt="" />
                    </div>
                    <div class="why__table__row2__a__text">
                        <span class="why__table__row2__a__text__a">Bypass trading limits</span>
                        <span class="why__table__row2__a__text__b">Avoid exchange restrictions to trade. Like caps on futures trading, and many others</span>
                    </div>
                    <div class="why__table__row2__a__rectangle"></div>
                </div>
                <div class="why__table__row2__col">
                    <div class="why__table__row2__b__icon">
                        <img src="../assets/why/Group 34630.svg" alt="" />
                    </div>
                    <div class="why__table__row2__b__text">
                        <span class="why__table__row2__b__text__a">Lead new movement</span>
                        <span class="why__table__row2__b__text__b">Auto trade with unlimited accounts in real-time and lead market movements like never seen before</span>
                    </div>
                    <div class="why__table__row2__b__rectangle"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.why {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 80px;
    position: absolute;
    width: 1240px;
    height: 718px;
    left: 100px;
    top: 2550px;
}

.why__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 20px;
    width: 693px;
    height: 190px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.why__title__text1 {
    width: 572px;
    height: 74px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    line-height: 74px;
    text-align: center;
    background: linear-gradient(100.19deg, rgba(0, 148, 255, 0.2) 0%, rgba(0, 211, 57, 0.2) 43.85%, rgba(147, 255, 0, 0.2) 85.91%), #FFFFFF;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-emphasis-color: transparent;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.why__title__text2 {
    width: 693px;
    height: 96px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: #A4A4AD;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.why__table {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    width: 1240px;
    height: 448px;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.why__table__row1 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    width: 1240px;
    height: 212px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.why__table__row1__col {
    position: absolute;
}

.why__table__row1__a {
    width: 608px;
    height: 212px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.why__table__row1__a__icon {
    position: absolute;
    width: 132px;
    height: 132px;
    left: 40px;
    top: 40px;
}

.why__table__row1__a__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    position: absolute;
    width: 264px;
    height: 94px;
    left: 226px;
    top: 59px;
}

.why__table__row1__a__text__a {
    width: 251px;
    height: 30px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.why__table__row1__a__text__b {
    width: 264px;
    height: 48px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #A4A4AD;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.why__table__row1__a__rectangle {
    box-sizing: border-box;
    position: absolute;
    width: 608px;
    height: 212px;
    left: 0px;
    top: 0px;
    border: 1px solid #1B1B1C;
    border-radius: 24px;
}

.why__table__row1__b {
    width: 608px;
    height: 212px;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.why__table__row1__b__icon {
    position: absolute;
    width: 132px;
    height: 132px;
    left: 672px;
    top: 40px;
}

.why__table__row1__b__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    position: absolute;
    width: 323px;
    height: 94px;
    left: 858px;
    top: 59px;
}

.why__table__row1__b__text__a {
    width: 280px;
    height: 30px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.why__table__row1__b__text__b {
    width: 323px;
    height: 48px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #A4A4AD;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.why__table__row1__b__rectangle {
    box-sizing: border-box;
    position: absolute;
    width: 608px;
    height: 212px;
    left: 632px;
    top: 0px;
    border: 1px solid #1B1B1C;
    border-radius: 24px;
}

.why__table__row2 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    width: 1240px;
    height: 212px;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.why__table__row2__col {
    position: absolute;
}

.why__table__row2__a {
    width: 608px;
    height: 212px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.why__table__row2__a__icon {
    position: absolute;
    width: 48px;
    height: 48px;
    left: 82px;
    top: 82px;
}

.why__table__row2__a__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

    position: absolute;
    width: 318px;
    height: 118px;
    left: 226px;
    top: 47px;
}

.why__table__row2__a__text__a {
    width: 237px;
    height: 30px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;

    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.why__table__row2__a__text__b {
    width: 318px;
    height: 72px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #A4A4AD;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.why__table__row2__a__rectangle {
    box-sizing: border-box;
    position: absolute;
    width: 608px;
    height: 212px;
    left: 0px;
    top: 0px;
    border: 1px solid #1B1B1C;
    border-radius: 24px;
}

.why__table__row2__b {
    width: 608px;
    height: 212px;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.why__table__row2__b__icon {
    position: absolute;
    width: 132px;
    height: 132px;
    left: 672px;
    top: 40px;

}

.why__table__row2__b__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

    position: absolute;
    width: 312px;
    height: 118px;
    left: 858px;
    top: 47px;
}

.why__table__row2__b__text__a {
    width: 237px;
    height: 30px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.why__table__row2__b__text__b {
    width: 312px;
    height: 72px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #A4A4AD;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.why__table__row2__b__rectangle {
    box-sizing: border-box;
    position: absolute;
    width: 608px;
    height: 212px;
    left: 632px;
    top: 0px;
    border: 1px solid #1B1B1C;
    border-radius: 24px;
}

</style>