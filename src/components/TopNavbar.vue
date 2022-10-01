<template>
    <div class="top-navbar">
        <div class="top-navbar__logo">
            <div class="top-navbar__logo__img">
                <img src="../assets/logo/Group 34668.svg" alt="logo" />
            </div>
            <img class="top-navbar__logo__text" src="../assets/logo/TradeSharing.svg" alt="texto" />
        </div>
        <div class="pages">
            <router-link to="/how" class="pages__how">How it works</router-link>
            <router-link to="/market" class="pages__market">Marketplace</router-link>
            <router-link to="/why" class="pages__why">Why TradeSharing</router-link>
            <router-link to="/faq" class="pages__faq">FAQ</router-link>
        </div>
        <div class="top-navbar__lang">
            <div class="top-navbar__lang__text">
                <span>English</span>
            </div>
            <div class="top-navbar__lang__img">
                <img class="navbar__lang__img__vector" src="../assets/lang/fi_chevron-down.svg" alt="lang" />
            </div>
        </div>
        <button class="top-navbar__joinlist">
            <span class="top-navbar__joinlist__text">Join the waitlist</span>
        </button>
    </div>
</template>

<style scoped>
.top-navbar {
    position: absolute;
    width: 1440px;
    height: 100px;
    left: calc(50% - 1440px/2);
    top: 0px;
    background: #000000;
}

.top-navbar__logo {    
    position: absolute;
    width: 228px;
    height: 52px;
    left: 100px;
    top: 24px;
}

.top-navbar__logo__img {
    position: absolute;
    width: 40px;
    height: 40px;
    left: 6px;
    top: 6px;
}

.top-navbar__logo__text {
    position: absolute;
    width: 166px;
    height: 24px;
    left: 56px;
    top: 17px;
}

.top-navbar__joinlist {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px 24px;
    gap: 10px;

    position: absolute;
    width: 157px;
    height: 44px;
    left: 1183px;
    top: 28px;
    background: #FFFFFF;
    border-radius: 6px;
}

.top-navbar__joinlist__text {
    width: 109px;
    height: 20px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.top-navbar__lang {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 8px;
    position: absolute;
    width: 79px;
    height: 22px;
    left: 1048px;
    top: 39px;
}

.top-navbar__lang__text {
    width: 53px;
    height: 22px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.top-navbar__lang__img {
    width: 18px;
    height: 18px;
    background: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.top-navbar__lang__img__vector {
    position: absolute;
    left: 25%;
    right: 25%;
    top: 37.5%;
    bottom: 37.5%;
    border: 1.5px solid #A4A4AD;
}

.pages {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 40px;
    position: absolute;
    width: 485px;
    height: 22px;
    left: 416px;
    top: 39px;
}

.pages__how {
    width: 97px;
    height: 22px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.pages__market {
    width: 95px;
    height: 22px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.pages__why {
    width: 140px;
    height: 22px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    flex: none;
    order: 2;
    flex-grow: 0;
}

.pages__faq {
    width: 33px;
    height: 22px;
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    flex: none;
    order: 3;
    flex-grow: 0;
}

</style>