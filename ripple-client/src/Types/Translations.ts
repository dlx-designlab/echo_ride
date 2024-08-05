export type translationType =
    {
        mainPage: pageType,
        sharing: pageType,
        resultsAvg: pageType,
        resultsBubbles: pageType & {
            stations: {
                start: string,
                end: string
            }
            feedback:
                {
                    positive: string,
                    negative: string
                }

        }
        categories: {
            air: categoryType,
            clean: categoryType,
            crowd: categoryType,
            ride: categoryType,
            driver: categoryType,
            safety: categoryType
        }
        buttons: {
            yes: string,
            no: string,
            share: string
        }
    };

type pageType = {
    title: string,
    subtitle: string
};

type categoryType = {
    title: string,
    shortTitle: string,
    min: string,
    max: string
};
