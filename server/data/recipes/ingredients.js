const INGREDIENT_CATEGORY = require('./ingredient-categories');

const INGREDIENTS = {
    BABY: {},
    BAKING: {
        ALL_PURPOSE_FLOUR: {
            name: 'all-purpose flour', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1545587195-a625d872ca82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTU5MjAzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        ALMOND_EXTRACT: { name: 'almond extract', category: INGREDIENT_CATEGORY.BAKING },
        ALMOND_FLOUR: {
            name: 'almond flour', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1615468688177-388c57dcc1c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY3NTA4fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        AMCHUR_POWDER: { name: 'amchur powder', category: INGREDIENT_CATEGORY.BAKING },
        BAKING_POWDER: {
            name: 'baking powder', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU0MDcwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BAKING_SODA: {
            name: 'baking soda', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU0MDcwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BREADCRUMBS: {
            name: 'breadcrumbs', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1584983085273-503dfa5a7ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU2NTQ0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BREAD_FLOUR: {
            name: 'bread flour', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1710857389305-5cba9211033f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU2NTgxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BROWNED_BUTTER: { name: 'browned butter', category: INGREDIENT_CATEGORY.BAKING },
        BROWN_SUGAR: {
            name: 'brown sugar', category: INGREDIENT_CATEGORY.BAKING, img: "https://plus.unsplash.com/premium_photo-1725677198542-2f6544eb2b8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcxNDk2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CAKE_FLOUR: {
            name: 'cake flour', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1517416795316-fe60b516a37d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU2NjQzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CASHEWS: {
            name: 'cashews', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1573555657105-47a0bb37c3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTgxNjA0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        COCOA_POWDER: {
            name: 'cocoa powder', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1603052875230-416ab3bc0545?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTgxNjg3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CONFECTIONERS_SUGAR: {
            name: 'confectioners\' sugar', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1581268497089-7a975fb491a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU2Njc0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CORNSTARCH: { name: 'cornstarch', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU0MDcwfA&ixlib=rb-4.0.3&q=80&w=400" },
        CRYSTAL_SUGAR: {
            name: 'crystal sugar', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1562245376-3f9dae9f0e73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU2NzUzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        DARK_COOKING_CHOCOLATE: {
            name: 'dark cooking chocolate', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1592290321458-49b80f943a26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc0MzExfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        DRY_MILK_POWDER: { name: 'dry milk powder', category: INGREDIENT_CATEGORY.BAKING },
        ENGLISH_TOFFEE_BITS: { name: 'english toffee bits', category: INGREDIENT_CATEGORY.BAKING },
        FOOD_COLORING: {
            name: 'food coloring', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1543495321-12cafe49a224?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU2ODY4fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        GLUTINOUS_RICE_FLOUR: { name: 'glutinous rice flour', category: INGREDIENT_CATEGORY.BAKING },
        HOT_FUDGE_SAUCE: { name: 'hot fudge sauce', category: INGREDIENT_CATEGORY.BAKING },
        MACADAMIA_NUT: { name: 'macadamia nut', category: INGREDIENT_CATEGORY.BAKING },
        MERINGUE_POWDER: { name: 'meringue powder', category: INGREDIENT_CATEGORY.BAKING },
        MILK_CHOCOLATE: {
            name: 'milk chocolate', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1591798153699-4b0bd9d57e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc0MjUzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        MILK_CHOCOLATE_CHIPS: { name: 'milk chocolate chips', category: INGREDIENT_CATEGORY.BAKING },
        MINI_CHOCOLATE_CHIPS: { name: 'mini chocolate chips', category: INGREDIENT_CATEGORY.BAKING },
        MOLASSES: { name: 'molasses', category: INGREDIENT_CATEGORY.BAKING },
        NINE_INCH_GRAHAM_CRACKER_PIE_CRUST: { name: '9-inch graham cracker pie crust', category: INGREDIENT_CATEGORY.BAKING },
        PECANS: {
            name: 'pecans', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1515544699701-86e5f26b66d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU3MzY2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        PANKO_BREADCRUMBS: {
            name: 'panko breadcrumbs', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1615322712569-8eb81aa62f80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU3NDk4fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        PEPPERMINT_EXTRACT: {
            name: 'peppermint extract', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1556118903-08e0b48041fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU3MDE1fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        PINE_NUTS: {
            name: 'pine nuts', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1589752881818-337a265572df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3ODE5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        POTATO_STARCH: { name: 'potato starch', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU0MDcwfA&ixlib=rb-4.0.3&q=80&w=400" },
        POWDERED_SUGAR: {
            name: 'powdered sugar', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1581268497089-7a975fb491a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTU5NjQyfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        PUMPKIN_SEEDS: { name: 'pumpkin seeds', category: INGREDIENT_CATEGORY.BAKING },
        RICE_FLOUR: { name: 'rice flour', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU0MDcwfA&ixlib=rb-4.0.3&q=80&w=400" },
        SEMI_SWEET_CHOCOLATE_CHIPS: {
            name: 'semi-sweet chocolate chips', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1585502866757-30ae9e509e31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc0MjA5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SHREDDED_COCONUT: {
            name: 'shredded coconut', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1588413335653-34b770bca7c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3ODY0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SLICED_ALMONDS: {
            name: 'sliced almonds', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1706467583443-21c3091d37b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY3MTExfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SPRINKLES: {
            name: 'sprinkles', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1516746924755-babd21844370?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU3MTAxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SWEETENED_CONDENSED_MILK: {
            name: 'sweetened condensed milk', category: INGREDIENT_CATEGORY.BAKING, img: "https://plus.unsplash.com/premium_photo-1666174848373-eda251e3acb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDUzMTA2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SWEET_CHOCOLATE: {
            name: 'sweet chocolate', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1614088685112-0a760b71a3c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU0MDg2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        TAPIOCA_STARCH: { name: 'tapioca starch', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU0MDcwfA&ixlib=rb-4.0.3&q=80&w=400" },
        UNSALTED_PEANUT: {
            name: 'unsalted peanut', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1549978113-29eb25c8177f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3NzE2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        VANILLA_EXTRACT: {
            name: 'vanilla extract', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1594054528740-6efcc2d13dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU3ODg2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        WALNUTS: {
            name: 'walnuts', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1524593656068-fbac72624bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU3MzI3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        WHITE_CHOCOLATE_CHIPS: {
            name: 'white chocolate chips', category: INGREDIENT_CATEGORY.BAKING, img: "https://plus.unsplash.com/premium_photo-1726080419555-1a74a78a6813?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU3NjAzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        WHITE_SUGAR: {
            name: 'white sugar', category: INGREDIENT_CATEGORY.BAKING, img: "https://images.unsplash.com/photo-1634612831148-03a8550e1d52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTU5NTQwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        YEAST: {
            name: 'yeast', category: INGREDIENT_CATEGORY.BAKING, img: "https://plus.unsplash.com/premium_photo-1723489310801-ee4e5a53f68b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU3Mjg0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        YELLOW_CAKE_MIX: { name: 'yellow cake mix', category: INGREDIENT_CATEGORY.BAKING },
    },
    BEAUTY: {
        BATH_BOMB: { name: 'bath bomb', category: INGREDIENT_CATEGORY.BEAUTY },
        BATH_SALT: { name: 'bath salt', category: INGREDIENT_CATEGORY.BEAUTY },
        BUBBLE_BATH: { name: 'bubble bath', category: INGREDIENT_CATEGORY.BEAUTY },
        CONDITIONER: { name: 'conditioner', category: INGREDIENT_CATEGORY.BEAUTY },
        DEODORANT: { name: 'deodorant', category: INGREDIENT_CATEGORY.BEAUTY },
        EYE_SHADOW: { name: 'eye shadow', category: INGREDIENT_CATEGORY.BEAUTY },
        FACE_CREAM: { name: 'face cream', category: INGREDIENT_CATEGORY.BEAUTY },
        FACE_MASK: {
            name: 'face mask', category: INGREDIENT_CATEGORY.BEAUTY, img: "https://images.unsplash.com/photo-1591931740907-55b2f861b650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU5NjYxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        FACE_WASH: { name: 'face wash', category: INGREDIENT_CATEGORY.BEAUTY },
        FEMININE_HYGIENE: { name: 'feminine hygiene', category: INGREDIENT_CATEGORY.BEAUTY },
        FEMININE_PRODUCTS: { name: 'feminine products', category: INGREDIENT_CATEGORY.BEAUTY },
        HAIR_GEL: { name: 'hair gel', category: INGREDIENT_CATEGORY.BEAUTY },
        HAIR_SPRAY: { name: 'hair spray', category: INGREDIENT_CATEGORY.BEAUTY },
        LIP_BALM: { name: 'lip balm', category: INGREDIENT_CATEGORY.BEAUTY },
        LIP_GLOSS: { name: 'lip gloss', category: INGREDIENT_CATEGORY.BEAUTY },
        LOOFAH: { name: 'loofah', category: INGREDIENT_CATEGORY.BEAUTY },
        LOTION: { name: 'lotion', category: INGREDIENT_CATEGORY.BEAUTY },
        MAKEUP_REMOVER: { name: 'makeup remover', category: INGREDIENT_CATEGORY.BEAUTY },
        MASCARA: { name: 'mascara', category: INGREDIENT_CATEGORY.BEAUTY },
        NAIL_POLISH: { name: 'nail polish', category: INGREDIENT_CATEGORY.BEAUTY },
        PERFUME: { name: 'perfume', category: INGREDIENT_CATEGORY.BEAUTY },
        RAZOR: { name: 'razor', category: INGREDIENT_CATEGORY.BEAUTY },
        SHAMPOO: { name: 'shampoo', category: INGREDIENT_CATEGORY.BEAUTY },
        SHAVING_CREAM: { name: 'shaving cream', category: INGREDIENT_CATEGORY.BEAUTY },
        SOAP: { name: 'soap', category: INGREDIENT_CATEGORY.BEAUTY },
        SUNSCREEN: { name: 'sunscreen', category: INGREDIENT_CATEGORY.BEAUTY },
        TOOTHBRUSH: { name: 'toothbrush', category: INGREDIENT_CATEGORY.BEAUTY },
        TOOTHPASTE: { name: 'toothpaste', category: INGREDIENT_CATEGORY.BEAUTY },
    },
    BEVERAGES: {
        A_AND_W_ROOT_BEER: {
            name: 'a&w root beer', category: INGREDIENT_CATEGORY.BEVERAGES, img: "https://images.unsplash.com/photo-1567099058592-19a2a2bf5fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTczNTIwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        ALE: { name: 'ale', category: INGREDIENT_CATEGORY.BEVERAGES },
        APPLE_CIDER: { name: 'apple cider', category: INGREDIENT_CATEGORY.BEVERAGES },
        APPLE_JUICE: { name: 'apple juice', category: INGREDIENT_CATEGORY.BEVERAGES },
        BARQS_ROOT_BEET: { name: 'barq\'s root beer', category: INGREDIENT_CATEGORY.BEVERAGES },
        BEER: { name: 'beer', category: INGREDIENT_CATEGORY.BEVERAGES },
        BLACK_TEA: { name: 'black tea', category: INGREDIENT_CATEGORY.BEVERAGES },
        CHAI_TEA: { name: 'chai tea', category: INGREDIENT_CATEGORY.BEVERAGES },
        CHAMOMILE_TEA: { name: 'chamomile tea', category: INGREDIENT_CATEGORY.BEVERAGES },
        CHRYSANTHEMUM_TEA: { name: 'chrysanthemum tea', category: INGREDIENT_CATEGORY.BEVERAGES },
        CIDER: { name: 'cider', category: INGREDIENT_CATEGORY.BEVERAGES },
        COCA_COLA: { name: 'coca cola', category: INGREDIENT_CATEGORY.BEVERAGES },
        COCONUT_WATER: {
            name: 'coconut water', category: INGREDIENT_CATEGORY.BEVERAGES, img: "https://images.unsplash.com/photo-1588413335653-34b770bca7c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3ODY0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        COFFEE: { name: 'coffee', category: INGREDIENT_CATEGORY.BEVERAGES },
        COKE: { name: 'coke', category: INGREDIENT_CATEGORY.BEVERAGES },
        COKE_ZERO: { name: 'coke zero', category: INGREDIENT_CATEGORY.BEVERAGES },
        CRANBERRY_JUICE: { name: 'cranberry juice', category: INGREDIENT_CATEGORY.BEVERAGES },
        CRAN_RASPBERRY_JUICE: { name: 'cran raspberry juice', category: INGREDIENT_CATEGORY.BEVERAGES },
        CREAM_SODA: { name: 'cream soda', category: INGREDIENT_CATEGORY.BEVERAGES },
        CRUSH: { name: 'crush', category: INGREDIENT_CATEGORY.BEVERAGES },
        DIET_COKE: { name: 'diet coke', category: INGREDIENT_CATEGORY.BEVERAGES },
        DIET_DR_PEPPER: { name: 'diet dr pepper', category: INGREDIENT_CATEGORY.BEVERAGES },
        DIET_MOUNTAIN_DEW: { name: 'diet mountain dew', category: INGREDIENT_CATEGORY.BEVERAGES },
        DIET_PEPSI: { name: 'diet pepsi', category: INGREDIENT_CATEGORY.BEVERAGES },
        DR_PEPPER: { name: 'dr pepper', category: INGREDIENT_CATEGORY.BEVERAGES },
        EARL_GREY_TEA: { name: 'earl grey tea', category: INGREDIENT_CATEGORY.BEVERAGES },
        ENGLISH_BREAKFAST_TEA: { name: 'english breakfast tea', category: INGREDIENT_CATEGORY.BEVERAGES },
        FANTA: { name: 'fanta', category: INGREDIENT_CATEGORY.BEVERAGES },
        FRESCA: { name: 'fresca', category: INGREDIENT_CATEGORY.BEVERAGES },
        FRUIT_PUNCH: { name: 'fruit punch', category: INGREDIENT_CATEGORY.BEVERAGES },
        GATORADE: { name: 'gatorade', category: INGREDIENT_CATEGORY.BEVERAGES },
        GRAPE_JUICE: { name: 'grape juice', category: INGREDIENT_CATEGORY.BEVERAGES },
        GRAPE_SODA: { name: 'grape soda', category: INGREDIENT_CATEGORY.BEVERAGES },
        GINGER_ALE: { name: 'ginger ale', category: INGREDIENT_CATEGORY.BEVERAGES },
        GREEN_TEA: { name: 'green tea', category: INGREDIENT_CATEGORY.BEVERAGES },
        HIBISCUS_TEA: { name: 'hibiscus tea', category: INGREDIENT_CATEGORY.BEVERAGES },
        HERBAL_TEA: { name: 'herbal tea', category: INGREDIENT_CATEGORY.BEVERAGES },
        HI_C: { name: 'hi-c', category: INGREDIENT_CATEGORY.BEVERAGES },
        HOT_WATER: {
            name: 'hot water', category: INGREDIENT_CATEGORY.BEVERAGES, img: "https://images.unsplash.com/photo-1521207418485-99c705420785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDYwNDAzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        ICE: { name: 'ice', category: INGREDIENT_CATEGORY.BEVERAGES },
        KOOLAID: { name: 'koolaid', category: INGREDIENT_CATEGORY.BEVERAGES },
        LEMON_LIME: { name: 'lemon lime', category: INGREDIENT_CATEGORY.BEVERAGES },
        MANGO_JUICE: { name: 'mango juice', category: INGREDIENT_CATEGORY.BEVERAGES },
        MATCHA_TEA: { name: 'matcha tea', category: INGREDIENT_CATEGORY.BEVERAGES },
        MILO: { name: 'milo', category: INGREDIENT_CATEGORY.BEVERAGES },
        MINUTE_MAID: { name: 'minute maid', category: INGREDIENT_CATEGORY.BEVERAGES },
        MOUNTAIN_DEW: { name: 'mountain dew', category: INGREDIENT_CATEGORY.BEVERAGES },
        MUG_ROOT_BEER: {
            name: 'mug root beer', category: INGREDIENT_CATEGORY.BEVERAGES, img: "https://images.unsplash.com/photo-1567099058592-19a2a2bf5fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTczNTIwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        OOLONG_TEA: { name: 'oolong tea', category: INGREDIENT_CATEGORY.BEVERAGES },
        ORANGE_JUICE: { name: 'orange juice', category: INGREDIENT_CATEGORY.BEVERAGES },
        ORANGE_SODA: { name: 'orange soda', category: INGREDIENT_CATEGORY.BEVERAGES },
        PEPPERMINT_TEA: { name: 'peppermint tea', category: INGREDIENT_CATEGORY.BEVERAGES },
        PEPSI: { name: 'pepsi', category: INGREDIENT_CATEGORY.BEVERAGES },
        PINEAPPLE_JUICE: { name: 'pineapple juice', category: INGREDIENT_CATEGORY.BEVERAGES, img: "https://plus.unsplash.com/premium_photo-1724255995351-9aa5b0e7cdad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcyMzQxfA&ixlib=rb-4.0.3&q=80&w=400" },
        POMEGRANATE_JUICE: {
            name: 'pomegranate juice', category: INGREDIENT_CATEGORY.BEVERAGES, img: "https://images.unsplash.com/photo-1507654304600-18d902b183b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTgwNjUwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        POWERADE: { name: 'powerade', category: INGREDIENT_CATEGORY.BEVERAGES },
        PLUM_JUICE: { name: 'plum juice', category: INGREDIENT_CATEGORY.BEVERAGES },
        RASPBERRY_JUICE: { name: 'raspberry juice', category: INGREDIENT_CATEGORY.BEVERAGES },
        RASPBERRY_SODA: { name: 'raspberry soda', category: INGREDIENT_CATEGORY.BEVERAGES },
        RED_BULL: { name: 'red bull', category: INGREDIENT_CATEGORY.BEVERAGES },
        ROOM_TEMPERATURE_WATER: {
            name: 'room temperature water', category: INGREDIENT_CATEGORY.BEVERAGES, img: "https://images.unsplash.com/photo-1521207418485-99c705420785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDYwNDAzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        ROOT_BEER: {
            name: 'root beer', category: INGREDIENT_CATEGORY.BEVERAGES, img: "https://images.unsplash.com/photo-1567099058592-19a2a2bf5fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTczNTIwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        RUM: { name: 'rum', category: INGREDIENT_CATEGORY.BEVERAGES },
        SELTZER_WATER: { name: 'seltzer water', category: INGREDIENT_CATEGORY.BEVERAGES },
        SEVEN_UP: { name: '7 up', category: INGREDIENT_CATEGORY.BEVERAGES },
        SIERRA_MIST: { name: 'sierra mist', category: INGREDIENT_CATEGORY.BEVERAGES },
        SPARKLING_WATER: { name: 'sparkling water', category: INGREDIENT_CATEGORY.BEVERAGES },
        SPRITE: {
            name: 'sprite', category: INGREDIENT_CATEGORY.BEVERAGES, img: "https://images.unsplash.com/photo-1592860893757-84536a1c9b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTczNjcxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SUNKIST: { name: 'sunkist', category: INGREDIENT_CATEGORY.BEVERAGES },
        TEA: { name: 'tea', category: INGREDIENT_CATEGORY.BEVERAGES },
        WATER: { name: 'water', category: INGREDIENT_CATEGORY.BEVERAGES, img: "https://images.unsplash.com/photo-1521207418485-99c705420785?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDYwNDAzfA&ixlib=rb-4.0.3&q=80&w=400" },
        WATERMELON_JUICE: {
            name: 'watermelon juice', category: INGREDIENT_CATEGORY.BEVERAGES, img: "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc1ODMwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        WINE: { name: 'wine', category: INGREDIENT_CATEGORY.BEVERAGES },
        YELLOW_TEA: { name: 'yellow tea', category: INGREDIENT_CATEGORY.BEVERAGES },
        YOOHOO: { name: 'yoohoo', category: INGREDIENT_CATEGORY.BEVERAGES },
    },
    BREAKFAST: {
        APPLE_JACKS_CEREAL: { name: 'apple jacks cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        BELVITA_BREAKFAST_BISCUITS: { name: 'belvita breakfast biscuits', category: INGREDIENT_CATEGORY.BREAKFAST },
        CAPTAIN_CRUNCH_CEREAL: { name: 'captain crunch cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        CHEX_CEREAL: { name: 'chex cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        CHERRIOS_CEREAL: { name: 'cherrios cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        CINNAMON_TOAST_CRUNCH_CEREAL: { name: 'cinnamon toast crunch cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        COCOA_PEBBLES_CEREAL: { name: 'cocoa pebbles cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        COOKIE_CRISP_CEREAL: { name: 'cookie crisp cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        CORN_FLAKES_CEREAL: { name: 'corn flakes cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        FROSTED_FLAKES_CEREAL: { name: 'frosted flakes cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        FROSTED_WHEATS_CEREAL: { name: 'frosted wheats cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        FRUIT_LOOPS_CEREAL: { name: 'fruit loops cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        FRUITY_PEBBLES_CEREAL: { name: 'fruity pebbles cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        GRANOLA: { name: 'granola', category: INGREDIENT_CATEGORY.BREAKFAST },
        GRITS: { name: 'grits', category: INGREDIENT_CATEGORY.BREAKFAST },
        HONEY_BUNCHES_OF_OATS_CEREAL: { name: 'honey bunches of oats cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        HONEY_COMBS_CEREAL: { name: 'honey combs cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        HONEY_NUT_CHEERIOS_CEREAL: { name: 'honey nut cheerios cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        KRAVE_CEREAL: { name: 'krave cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        LIFE_CEREAL: { name: 'life cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        LUCKY_CHARMS_CEREAL: { name: 'lucky charms cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        MUESLI: { name: 'muesli', category: INGREDIENT_CATEGORY.BREAKFAST },
        MUFFIN_TOPS_CEREAL: { name: 'muffin tops cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        OATMEAL: { name: 'oatmeal', category: INGREDIENT_CATEGORY.BREAKFAST },
        PANCAKE_MIX: { name: 'pancake mix', category: INGREDIENT_CATEGORY.BREAKFAST },
        POP_TARTS: { name: 'pop tarts', category: INGREDIENT_CATEGORY.BREAKFAST },
        POPS_CEREAL: { name: 'pops cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        REESES_PUFFS_CEREAL: { name: 'reeses puffs cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        RICE_KRISPIES_CEREAL: { name: 'rice krispies cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        SHREDDED_WHEAT_CEREAL: { name: 'shredded wheat cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        SPECIAL_K_CEREAL: { name: 'special k cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
        STEEL_OATS: { name: 'steel oats', category: INGREDIENT_CATEGORY.BREAKFAST },
        TOASTER_STRUDEL: { name: 'toaster strudel', category: INGREDIENT_CATEGORY.BREAKFAST },
        TRIX_CEREAL: { name: 'trix cereal', category: INGREDIENT_CATEGORY.BREAKFAST },
    },
    CANNED: {
        BEEF_BOUILLON: { name: 'beef bouillon', category: INGREDIENT_CATEGORY.CANNED },
        BEEF_BOUILLON_CUBE: { name: 'beef bouillon cube', category: INGREDIENT_CATEGORY.CANNED },
        BEEF_BROTH: { name: 'beef broth', category: INGREDIENT_CATEGORY.CANNED },
        BAKED_POTATO_SOUP: { name: 'baked potato soup', category: INGREDIENT_CATEGORY.CANNED },
        BLACK_BEANS: { name: 'black beans', category: INGREDIENT_CATEGORY.CANNED },
        BLACK_BEAN_SOUP: { name: 'black bean soup', category: INGREDIENT_CATEGORY.CANNED },
        BROCCOLI_CHEDDAR_SOUP: { name: 'broccoli cheddar soup', category: INGREDIENT_CATEGORY.CANNED },
        CAMPBELLS: { name: 'campbell\'s', category: INGREDIENT_CATEGORY.CANNED },
        CAMPBELLS_CHICKEN_NOODLE_SOUP: { name: 'campbell\'s chicken noodle soup', category: INGREDIENT_CATEGORY.CANNED },
        CANNED_CREAMED_CORN: {
            name: 'can of creamed corn', category: INGREDIENT_CATEGORY.CANNED, img: "https://images.unsplash.com/photo-1634467524884-897d0af5e104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTczMDA0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CANNED_GREEN_BEANS: { name: 'can of green beans', category: INGREDIENT_CATEGORY.CANNED },
        CANNED_PEACH: { name: 'can of peach', category: INGREDIENT_CATEGORY.CANNED, img: "https://images.unsplash.com/photo-1572929773424-93549dced6d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcyODY5fA&ixlib=rb-4.0.3&q=80&w=400" },
        CANNED_PINEAPPLE_SLICES: { name: 'can of pineapple slices', category: INGREDIENT_CATEGORY.CANNED, img: "https://plus.unsplash.com/premium_photo-1724255995351-9aa5b0e7cdad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcyMzQxfA&ixlib=rb-4.0.3&q=80&w=400" },
        CANNED_SWEET_CORN: { name: 'can of sweet corn', category: INGREDIENT_CATEGORY.CANNED },
        CANNED_TUNA: { name: 'can of tuna', category: INGREDIENT_CATEGORY.CANNED },
        CHICKEN_BOUILLON: { name: 'chicken bouillon', category: INGREDIENT_CATEGORY.CANNED },
        CHICKEN_BOUILLON_CUBE: { name: 'chicken bouillon cube', category: INGREDIENT_CATEGORY.CANNED },
        CHICKEN_BROTH: { name: 'chicken broth', category: INGREDIENT_CATEGORY.CANNED },
        CHICKEN_RICE_SOUP: { name: 'chicken rice soup', category: INGREDIENT_CATEGORY.CANNED },
        CHICKPEA: { name: 'chickpea', category: INGREDIENT_CATEGORY.CANNED },
        CHILI: { name: 'chili', category: INGREDIENT_CATEGORY.CANNED },
        CHIPOTLE_PEPPERS_IN_ADOBO: { name: 'chipotle peppers in adobo', category: INGREDIENT_CATEGORY.CANNED },
        CLAM_CHOWDER_SOUP: { name: 'clam chowder soup', category: INGREDIENT_CATEGORY.CANNED },
        CONDENSED_MILK: { name: 'condensed milk', category: INGREDIENT_CATEGORY.CANNED },
        CORNBREAD_MIX: { name: 'cornbread mix', category: INGREDIENT_CATEGORY.CANNED },
        CORN_CHOWDER_SOUP: { name: 'corn chowder soup', category: INGREDIENT_CATEGORY.CANNED },
        CREAM_OF_CHICKEN: { name: 'cream of chicken', category: INGREDIENT_CATEGORY.CANNED },
        CREAM_OF_MUSHROOM: { name: 'cream of mushroom', category: INGREDIENT_CATEGORY.CANNED },
        CRISPY_FRIED_ONIONS: { name: 'crispy fried onions', category: INGREDIENT_CATEGORY.CANNED },
        CRUSHED_TOMATOES: { name: 'crushed tomatoes', category: INGREDIENT_CATEGORY.CANNED },
        DICED_TOMATO: { name: 'diced tomato', plural: 'diced tomatoes', category: INGREDIENT_CATEGORY.CANNED },
        DRY_BEAN: { name: 'dry bean', category: INGREDIENT_CATEGORY.CANNED },
        DRY_NAVY_BEAN: { name: 'dry navy bean', category: INGREDIENT_CATEGORY.CANNED },
        DUMPLING_SOUP: { name: 'dumpling soup', category: INGREDIENT_CATEGORY.CANNED },
        ENCHILADA_SOUP: { name: 'enchilada soup', category: INGREDIENT_CATEGORY.CANNED },
        EVAPORATED_MILK: { name: 'evaporated milk', category: INGREDIENT_CATEGORY.CANNED },
        FIRE_ROASTED_DICED_TOMATOES: {
            name: 'fire roasted diced tomatoes', category: INGREDIENT_CATEGORY.CANNED, img: "https://plus.unsplash.com/premium_photo-1670845441397-9b45c5869a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTU5NDAxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        FRIED_SHALLOTS: { name: 'fried shallots', category: INGREDIENT_CATEGORY.CANNED },
        GUMBO_SOUP: { name: 'gumbo soup', category: INGREDIENT_CATEGORY.CANNED },
        INSTANT_RAMEN: {
            name: 'instant ramen', category: INGREDIENT_CATEGORY.CANNED, img: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4NzY2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        JAMBALAYA_SOUP: { name: 'jambalaya soup', category: INGREDIENT_CATEGORY.CANNED },
        JAPANESE_CURRY_MIX: { name: 'japanese curry mix', category: INGREDIENT_CATEGORY.CANNED },
        KIDNEY_BEANS: { name: 'kidney beans', category: INGREDIENT_CATEGORY.CANNED },
        KNORR_TAMARIND_SOUP_BASE: { name: 'Knorr tamarind', category: INGREDIENT_CATEGORY.CANNED },
        LENTIL_SOUP: { name: 'lentil soup', category: INGREDIENT_CATEGORY.CANNED },
        LENTIL_PROTEIN_SOUP: { name: 'lentil protein soup', category: INGREDIENT_CATEGORY.CANNED },
        LIGHT_CREAM: { name: 'light cream', category: INGREDIENT_CATEGORY.CANNED },
        LOADED_POTATO_SOUP: { name: 'loaded potato soup', category: INGREDIENT_CATEGORY.CANNED },
        MARASCHINO_CHERRIES: {
            name: 'maraschino cherries', category: INGREDIENT_CATEGORY.CANNED, img: "https://images.unsplash.com/photo-1560772336-0a9953caf5b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc0ODUwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        MARINARA_SAUCE: { name: 'marinara sauce', category: INGREDIENT_CATEGORY.CANNED },
        PANERA: { name: 'panera', category: INGREDIENT_CATEGORY.CANNED },
        PINEAPPLE_TIDBIT: { name: 'pineapple tidbit', category: INGREDIENT_CATEGORY.CANNED, img: "https://plus.unsplash.com/premium_photo-1724255995351-9aa5b0e7cdad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcyMzQxfA&ixlib=rb-4.0.3&q=80&w=400" },
        PORK_AND_BEANS: { name: 'pork and beans', category: INGREDIENT_CATEGORY.CANNED },
        POTATO_SOUP: { name: 'potato soup', category: INGREDIENT_CATEGORY.CANNED },
        PIZZA_SAUCE: { name: 'pizza sauce', category: INGREDIENT_CATEGORY.CANNED },
        PROGRESSO: { name: 'progresso', category: INGREDIENT_CATEGORY.CANNED },
        PUMPKIN_PUREE: { name: 'pumpkin puree', category: INGREDIENT_CATEGORY.CANNED },
        RED_CURRY_PASTE: { name: 'red curry paste', category: INGREDIENT_CATEGORY.CANNED },
        REFRIED_BEANS: { name: 'refried beans', category: INGREDIENT_CATEGORY.CANNED },
        SPLIT_PEA_SOUP: { name: 'split pea soup', category: INGREDIENT_CATEGORY.CANNED },
        SUN_DRIED_TOMATOES: { name: 'sun dried tomatoes', category: INGREDIENT_CATEGORY.CANNED },
        TOMATO_PASTE: { name: 'tomato paste', category: INGREDIENT_CATEGORY.CANNED },
        TOMATO_SAUCE: { name: 'tomato sauce', category: INGREDIENT_CATEGORY.CANNED },
        TOMATO_SOUP: {
            name: 'tomato soup', category: INGREDIENT_CATEGORY.CANNED, img: "https://images.unsplash.com/photo-1608949621301-dc970e104c90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc2NTk1fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        TORTILLA_SOUP: { name: 'tortilla soup', category: INGREDIENT_CATEGORY.CANNED },
        VEGETABLE_BROTH: { name: 'vegetable broth', category: INGREDIENT_CATEGORY.CANNED },
        VEGETABLE_SOUP: { name: 'vegetable soup', category: INGREDIENT_CATEGORY.CANNED },
        WILD_RICE_SOUP: { name: 'wild rice soup', category: INGREDIENT_CATEGORY.CANNED },
        YELLOW_CURRY_PASTE: { name: 'yellow curry paste', category: INGREDIENT_CATEGORY.CANNED },
    },
    CLOTHING: {
        BELT: { name: 'belt', category: INGREDIENT_CATEGORY.CLOTHING },
        BOOTS: { name: 'boots', category: INGREDIENT_CATEGORY.CLOTHING },
        BOXERS: { name: 'boxers', category: INGREDIENT_CATEGORY.CLOTHING },
        BRA: { name: 'bra', category: INGREDIENT_CATEGORY.CLOTHING },
        BRIEFS: { name: 'briefs', category: INGREDIENT_CATEGORY.CLOTHING },
        COAT: { name: 'coat', category: INGREDIENT_CATEGORY.CLOTHING },
        LINGERIE: { name: 'lingerie', category: INGREDIENT_CATEGORY.CLOTHING },
        PANTS: { name: 'pants', category: INGREDIENT_CATEGORY.CLOTHING },
        SHIRT: { name: 'shirt', category: INGREDIENT_CATEGORY.CLOTHING },
        SHOES: { name: 'shoes', category: INGREDIENT_CATEGORY.CLOTHING },
        SOCKS: { name: 'socks', category: INGREDIENT_CATEGORY.CLOTHING },
        SUNGLASSES: { name: 'sunglasses', category: INGREDIENT_CATEGORY.CLOTHING },
        SWEATER: { name: 'sweater', category: INGREDIENT_CATEGORY.CLOTHING },
        SWEATSHIRT: { name: 'sweatshirt', category: INGREDIENT_CATEGORY.CLOTHING },
        TANK_TOP: { name: 'tank top', category: INGREDIENT_CATEGORY.CLOTHING },
        T_SHIRT: { name: 't-shirt', category: INGREDIENT_CATEGORY.CLOTHING },
        TEE: { name: 'tee', category: INGREDIENT_CATEGORY.CLOTHING },
        THONG: { name: 'thong', category: INGREDIENT_CATEGORY.CLOTHING },
        TIE: { name: 'tie', category: INGREDIENT_CATEGORY.CLOTHING },
        UNDERWEAR: { name: 'underwear', category: INGREDIENT_CATEGORY.CLOTHING },
    },
    CONDIMENTS: {
        AIOLI_SAUCE: { name: 'aioli sauce', category: INGREDIENT_CATEGORY.CONDIMENTS },
        AJI_AMARILLO_PASTE: {
            name: 'aji amarillo paste', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1505725513549-477dfcbe55c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY2ODY3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        APRICOT_JAM: {
            name: 'apricot jam', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1627931754115-478ed65b4fef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcwNjQ4fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        APRICOT_JELLY: {
            name: 'apricot jelly', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1627931754115-478ed65b4fef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcwNjQ4fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        ASIAN_CHILI_GARLIC_SAUCE: { name: 'Asian chili garlic sauce', category: INGREDIENT_CATEGORY.CONDIMENTS },
        BBQ_SAUCE: {
            name: 'BBQ sauce', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1638324396075-27d7a6a7fd98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU4Nzc0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BISCOFF_BUTTER: { name: 'biscoff butter', category: INGREDIENT_CATEGORY.CONDIMENTS },
        BLUE_CHEESE_DRESSING: { name: 'blue cheese dressing', category: INGREDIENT_CATEGORY.CONDIMENTS },
        BUFFALO_SAUCE: { name: 'buffalo sauce', category: INGREDIENT_CATEGORY.CONDIMENTS },
        BUTTER_PICKLE_CHIPS: {
            name: 'butter pickle chips', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://plus.unsplash.com/premium_photo-1675731118182-8a39012cdd3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3NjAxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CAESAR_DRESSING: { name: 'caesar dressing', category: INGREDIENT_CATEGORY.CONDIMENTS },
        CAPER: { name: 'caper', category: INGREDIENT_CATEGORY.CONDIMENTS },
        CHILI_OIL: { name: 'chili oil', category: INGREDIENT_CATEGORY.CONDIMENTS },
        CHIPOTLE_SAUCE: { name: 'chipotle sauce', category: INGREDIENT_CATEGORY.CONDIMENTS },
        COOKIE_BUTTER: { name: 'cookie butter', category: INGREDIENT_CATEGORY.CONDIMENTS },
        CORN_SYRUP: { name: 'corn syrup', category: INGREDIENT_CATEGORY.CONDIMENTS },
        CRANBERRY_SAUCE: { name: 'cranberry sauce', category: INGREDIENT_CATEGORY.CONDIMENTS },
        DARK_SOY_SAUCE: {
            name: 'dark soy sauce', category: INGREDIENT_CATEGORY.CONDIMENTS, imig: "https://images.unsplash.com/photo-1582581720432-de83a98176ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3MzI2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        DIJON_MUSTARD: { name: 'dijon mustard', category: INGREDIENT_CATEGORY.CONDIMENTS },
        FISH_SAUCE: {
            name: 'fish sauce', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1638324395681-9f6509ebb3f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU4OTIxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        FRY_SAUCE: { name: 'fry sauce', category: INGREDIENT_CATEGORY.CONDIMENTS },
        GINGER_GARLIC_PASTE: { name: 'ginger garlic paste', category: INGREDIENT_CATEGORY.CONDIMENTS },
        GINGER_PUREE: { name: 'ginger puree', category: INGREDIENT_CATEGORY.CONDIMENTS },
        GOCHUJANG_SAUCE: { name: 'gochujang sauce', category: INGREDIENT_CATEGORY.CONDIMENTS },
        GUACAMOLE: {
            name: 'guacamole', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1620019989549-bbb873b6612d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc2OTM3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        HOISIN_SAUCE: { name: 'hoisin sauce', category: INGREDIENT_CATEGORY.CONDIMENTS },
        HONEY: {
            name: 'honey', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc2ODMxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        HONEY_MUSTARD: { name: 'honey mustard', category: INGREDIENT_CATEGORY.CONDIMENTS },
        HOT_SAUCE: { name: 'hot sauce', category: INGREDIENT_CATEGORY.CONDIMENTS },
        HUMMUS: {
            name: 'hummus', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1637949385162-e416fb15b2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3NDE4fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        ITALIAN_DRESSING: { name: 'italian dressing', category: INGREDIENT_CATEGORY.CONDIMENTS },
        KETCHUP: {
            name: 'ketchup', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1582998488406-08750eeb6d7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc2Mzk3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        KEWPIE_MAYONNAISE: { name: 'kewpie mayonnaise', category: INGREDIENT_CATEGORY.CONDIMENTS },
        LIGHT_SOY_SAUCE: {
            name: 'light soy sauce', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1582581720432-de83a98176ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3MzI2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        LIQUID_SMOKE: { name: 'liquid smoke', category: INGREDIENT_CATEGORY.CONDIMENTS },
        MAGGI_SEASONING: { name: 'maggi seasoning', category: INGREDIENT_CATEGORY.CONDIMENTS },
        MAPLE_SYRUP: {
            name: 'maple syrup', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1552314971-d2feb3513949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3NDgxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        MAYONNAISE: {
            name: 'mayonnaise', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://plus.unsplash.com/premium_photo-1664391870099-a7d4976fd8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc2OTkwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        MISO_PASTE: { name: 'miso paste', category: INGREDIENT_CATEGORY.CONDIMENTS },
        NANDOS_PERI_PERI_SAUCE: { name: 'nando\'s peri peri sauce', category: INGREDIENT_CATEGORY.CONDIMENTS },
        NUTELLA: {
            name: 'nutella', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1607124316018-25beec6d0ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3MDkwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        OLIVES: {
            name: 'olives', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1622341357129-c460d41da93d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3MTYyfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        OYSTER_SAUCE: { name: 'oyster sauce', category: INGREDIENT_CATEGORY.CONDIMENTS },
        PEANUT_BUTTER: {
            name: 'creamy peanut butter', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1615110250484-e8c3b151b957?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3MDgzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        PICANTE_SAUCE: { name: 'picante sauce', category: INGREDIENT_CATEGORY.CONDIMENTS },
        PICKLE_JUICE: {
            name: 'pickle juice', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1634467524884-897d0af5e104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTczMDA0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        PICKLES: {
            name: 'pickles', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://plus.unsplash.com/premium_photo-1675731118182-8a39012cdd3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3NjAxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        PONZU_SAUCE: { name: 'ponzu sauce', category: INGREDIENT_CATEGORY.CONDIMENTS },
        RANCH_DRESSING: {
            name: 'ranch dressing', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1534889196564-a6799df68403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU5MDkwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        RELISH: {
            name: 'relish', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1468335580199-98bbb90389d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU5MjE3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SALSA: {
            name: 'salsa', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1634233822146-5cd9c24fdab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU5MTU4fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SAUERKRAUT: {
            name: 'sauerkraut', category: INGREDIENT_CATEGORY.CONDIMENTS
        },
        SHRIMP_PASTE: { name: 'shrimp paste', category: INGREDIENT_CATEGORY.CONDIMENTS },
        SRIRACHA_SAUCE: {
            name: 'sriracha sauce', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1519420638722-a2a5749c32be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc2NDc0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        STRAWBERRY_JAM: {
            name: 'strawberry jam', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1580756321097-164e0ccb4ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU1ODExfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        STRAWBERRY_JELLY: {
            name: 'strawberry jelly', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1580756321097-164e0ccb4ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU1ODExfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SWEET_CHILI_SAUCE: { name: 'sweet chili sauce', category: INGREDIENT_CATEGORY.CONDIMENTS },
        SWEET_SOY_SAUCE: {
            name: 'sweet soy sauce', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1582581720432-de83a98176ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3MzI2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SYRUP: {
            name: 'syrup', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1552314971-d2feb3513949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3NDgxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        TABASCO_SAUCE: { name: 'tabasco sauce', category: INGREDIENT_CATEGORY.CONDIMENTS },
        TACO_SAUCE: {
            name: 'taco sauce', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1611793413292-9a3f7917380f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU5Mzk2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        TARTAR_SAUCE: { name: 'tartar sauce', category: INGREDIENT_CATEGORY.CONDIMENTS },
        TERIYAKI_SAUCE: { name: 'teriyaki sauce', category: INGREDIENT_CATEGORY.CONDIMENTS },
        THOUSAND_ISLAND_DRESSING: { name: 'thousand island dressing', category: INGREDIENT_CATEGORY.CONDIMENTS },
        WASABI: {
            name: 'wasabi', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1599569958048-2051d3f9a3e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU5MzQ0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        WORCESTERSHIRE_SAUCE: { name: 'worcestershire sauce', category: INGREDIENT_CATEGORY.CONDIMENTS },
        YELLOW_MUSTARD: {
            name: 'yellow mustard', category: INGREDIENT_CATEGORY.CONDIMENTS, img: "https://images.unsplash.com/photo-1638324396220-432156cd9303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc2NzcyfA&ixlib=rb-4.0.3&q=80&w=400"
        },
    },
    COOKING_SUPPLIES: {
        AIR_FRYER: {
            name: 'air fryer', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES, img: "https://plus.unsplash.com/premium_photo-1672192166555-8736f47194db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU5NDQ4fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        ALUMINUM_FOIL: {
            name: 'aluminum foil', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES, img: "https://images.unsplash.com/photo-1594255897691-9d1edad1ecfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU5NTgwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        APRON: {
            name: 'apron', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES, img: "https://images.unsplash.com/photo-1534445347662-670a224a28ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU5NjMyfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BAKING_PAN: { name: 'baking pan', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        BAKING_SHEET: { name: 'baking sheet', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        BLENDER: { name: 'blender', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        BOWLS: { name: 'bowls', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        CAKE_PAN: { name: 'cake pan', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        CAN_OPENER: { name: 'can opener', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        CASSEROLE_DISH: { name: 'casserole dish', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        COFFEE_GRINDER: { name: 'coffee grinder', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        COFFEE_MAKER: { name: 'coffee maker', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        COLANDER: { name: 'colander', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        COASTER: { name: 'coaster', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        COOKING_SPOON: { name: 'cooking spoon', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        CORKSCREW: { name: 'corkscrew', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        CROCK_POT: { name: 'crock pot', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        CUPS: { name: 'cups', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        CUTTING_BOARD: { name: 'cutting board', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        CUTLERY: { name: 'cutlery', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        ELECTRIC_MIXER: { name: 'electric mixer', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        EMULSIFIER: { name: 'emulsifier', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        FOOD_STORAGE_CONTAINER: { name: 'food storage container', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        FORKS: { name: 'forks', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        FRYING_PAN: { name: 'frying pan', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        GRATER: { name: 'grater', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        GLASSWARE: { name: 'glassware', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        KETTLE: { name: 'kettle', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        KITCHEN_SCISSORS: { name: 'kitchen scissors', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        KNIFE: { name: 'knife', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        KNIVES: { name: 'knives', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        MEASURING_CUPS: { name: 'measuring cups', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        MEASURING_SPOONS: { name: 'measuring spoons', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        MICROWAVE: { name: 'microwave', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        MIXER: { name: 'mixer', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        MIXING_BOWL: { name: 'mixing bowl', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        MUGS: { name: 'mugs', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        OVEN_MITT: { name: 'oven mitt', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        PAN: { name: 'pan', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        PARCHMENT_PAPER: { name: 'parchment paper', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        PIZZA_CUTTER: { name: 'pizza cutter', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        PIZZA_PAN: { name: 'pizza pan', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        PITCHER: { name: 'pitcher', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        PLASTIC_WRAP: { name: 'plastic wrap', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        PLATES: { name: 'plates', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        POPCORN_POPPER: { name: 'popcorn popper', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        POT: { name: 'pot', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        POTATO_PEELER: { name: 'potato peeler', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        PRESSURE_COOKER: { name: 'pressure cooker', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        RICE_COOKER: { name: 'rice cooker', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        ROLLING_PIN: { name: 'rolling pin', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        SAUCEPAN: { name: 'saucepan', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        SPATULA: { name: 'spatula', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        SPOONS: { name: 'spoons', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        STRAINER: { name: 'strainer', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        STOCK_PAN: { name: 'stock pan', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        THERMOMETER: { name: 'thermometer', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        TOASTER: { name: 'toaster', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        TUPPERWARE: { name: 'tupperware', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        TWINE: { name: 'twine', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        VEGETABLE_PEELER: { name: 'vegetable peeler', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        WHISK: { name: 'whisk', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        WOK: { name: 'wok', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
        ZIPLOC_BAG: { name: 'ziploc bag', category: INGREDIENT_CATEGORY.COOKING_SUPPLIES },
    },
    DAIRY: {
        ALMOND_MILK: {
            name: 'almond milk', category: INGREDIENT_CATEGORY.DAIRY, img: "https://plus.unsplash.com/premium_photo-1693118931226-54167a9c6c12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY3MDMwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        AMERICAN_CHEESE: { name: 'american cheese', category: INGREDIENT_CATEGORY.DAIRY },
        ASIAGO_CHEESE: { name: 'asiago cheese', category: INGREDIENT_CATEGORY.DAIRY },
        BISCUITS: {
            name: 'biscuits', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1522237825450-a0c44eecddb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTgxMDM2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BRIE_CHEESE: { name: 'brie cheese', category: INGREDIENT_CATEGORY.DAIRY },
        BLUE_CHEESE: { name: 'blue cheese', category: INGREDIENT_CATEGORY.DAIRY },
        BUTTERMILK: { name: 'buttermilk', category: INGREDIENT_CATEGORY.DAIRY },
        CHEDDAR_CHEESE: {
            name: 'cheddar cheese', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1627935722051-395636b0d8a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4Nzg1fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CHEESE: {
            name: 'cheese', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1627935722051-395636b0d8a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4Nzg1fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CHOCOLATE_MILK: {
            name: 'chocolate milk', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1585752379769-801711aaf836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc0MDkzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        COLBY_CHEESE: { name: 'colby cheese', category: INGREDIENT_CATEGORY.DAIRY },
        COLBY_JACK_CHEESE: { name: 'colby jack cheese', category: INGREDIENT_CATEGORY.DAIRY },
        COTTAGE_CHEESE: { name: 'cottage cheese', category: INGREDIENT_CATEGORY.DAIRY },
        COCONUT_CREAM: {
            name: 'coconut cream', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1588413335653-34b770bca7c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3ODY0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        COCONUT_MILK: {
            name: 'coconut milk', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1588413335653-34b770bca7c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3ODY0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CREAM_CHEESE: {
            name: 'cream cheese', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1442604699113-7d805614c476?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTgwODMyfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        COFFEE_CREAMER: { name: 'coffee creamer', category: INGREDIENT_CATEGORY.DAIRY },
        DOUBLE_CRUST_PIE_CRUST: { name: 'double crust pie crust', category: INGREDIENT_CATEGORY.DAIRY },
        EGG: {
            name: 'egg', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY2NzE0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        EGG_WHITES: {
            name: 'egg whites', category: INGREDIENT_CATEGORY.DAIRY, img: "https://plus.unsplash.com/premium_photo-1713463857946-dc906a2450a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4MDI0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        EGG_YOLK: {
            name: 'egg yolk', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1607690424395-6660d838d818?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY3OTAzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        FETA_CHEESE: { name: 'feta cheese', category: INGREDIENT_CATEGORY.DAIRY },
        GOAT_CHEESE: { name: 'goat cheese', category: INGREDIENT_CATEGORY.DAIRY },
        GOUDA_CHEESE: { name: 'gouda cheese', category: INGREDIENT_CATEGORY.DAIRY },
        GREEK_YOGURT: {
            name: 'greek yogurt', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1571230389215-b34a89739ef1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTgxMTc5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        GRUYERE_CHEESE: { name: 'gruyere cheese', category: INGREDIENT_CATEGORY.DAIRY },
        HALF_AND_HALF: { name: 'half and half', category: INGREDIENT_CATEGORY.DAIRY },
        HAVARTI_CHEESE: { name: 'havarti cheese', category: INGREDIENT_CATEGORY.DAIRY },
        HEAVY_CREAM: {
            name: 'heavy cream', category: INGREDIENT_CATEGORY.DAIRY, img: "https://plus.unsplash.com/premium_photo-1669880504199-4c9ab85255f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU5ODU2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        MANCHEGO_CHEESE: { name: 'manchego cheese', category: INGREDIENT_CATEGORY.DAIRY },
        MARGARINE: { name: 'margarine', category: INGREDIENT_CATEGORY.DAIRY },
        MEDIUM_CHEDDAR_CHEESE: { name: 'medium cheddar cheese', category: INGREDIENT_CATEGORY.DAIRY },
        MEXICAN_BLEND_CHEESE: { name: 'mexican blend cheese', category: INGREDIENT_CATEGORY.DAIRY },
        MILD_CHEDDAR_CHEESE: { name: 'mild cheddar cheese', category: INGREDIENT_CATEGORY.DAIRY },
        MILK: {
            name: 'milk', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY3NjUwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        MOZZARELLA_CHEESE: { name: 'mozzarella cheese', category: INGREDIENT_CATEGORY.DAIRY },
        MONTEREY_JACK_CHEESE: { name: 'monterey jack cheese', category: INGREDIENT_CATEGORY.DAIRY },
        OAXACAN_CHEESE: { name: 'oaxacan cheese', category: INGREDIENT_CATEGORY.DAIRY },
        ONE_PERCENT_MILK: {
            name: '1% milk', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY3NjUwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        PARMESAN_CHEESE: {
            name: 'parmesan cheese', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1589881133595-a3c085cb731d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU4ODMzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        PARMIGIANO_REGGIANO: {
            name: 'parmigiano reggiano', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1589881133595-a3c085cb731d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU4ODMzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        PEPPER_JACK_CHEESE: {
            name: 'pepper jack cheese', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1627935722051-395636b0d8a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4Nzg1fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        PLAIN_YOGURT: {
            name: 'plain yogurt', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1571230389215-b34a89739ef1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTgxMTc5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        PROVOLONE_CHEESE: {
            name: 'provolone cheese', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1627935722051-395636b0d8a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4Nzg1fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        REFRIGERATED_BISCUIT_DOUGH: { name: 'refrigerated biscuit dough', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1522237825450-a0c44eecddb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTgxMDM2fA&ixlib=rb-4.0.3&q=80&w=400" },
        REFRIGERATED_BUTTERMILK_BISCUITS: { name: 'refrigerated buttermilk biscuits', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1522237825450-a0c44eecddb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTgxMDM2fA&ixlib=rb-4.0.3&q=80&w=400" },
        REFRIGERATED_CINNAMON_ROLLS: {
            name: 'refrigerated cinnamon rolls', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1585190775852-3e6bb2b80184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDYwMDUyfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        REFRIGERATED_COOKIE_DOUGH: {
            name: 'refrigerated cookie dough', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1506184341422-6cc152ae474b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDYwMjgxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        REFRIGERATED_CRESCENT_ROLLS: { name: 'refrigerated crescent rolls', category: INGREDIENT_CATEGORY.DAIRY },
        REFRIGERATED_PIE_CRUST: {
            name: 'refrigerated pie crust', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1603779702200-95b2785f2083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDYwMjM0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        REFRIGERATED_PIZZA_CRUST: {
            name: 'refrigerated pizza crust', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1607207504006-89723ee11236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDYwMzQ0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        REFRIGERATED_PUFF_PASTRY: { name: 'refrigerated puff pastry', category: INGREDIENT_CATEGORY.DAIRY },
        REFRIGERATED_SWISS_ROLLS: { name: 'refrigerated swiss rolls', category: INGREDIENT_CATEGORY.DAIRY },
        RICOTTA_CHEESE: { name: 'ricotta cheese', category: INGREDIENT_CATEGORY.DAIRY },
        SALTED_BUTTER: {
            name: 'salted butter', category: INGREDIENT_CATEGORY.DAIRY, img: "https://plus.unsplash.com/premium_photo-1699651798312-dd6d2734b4fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY3NzQ4fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SHARP_CHEDDAR_CHEESE: { name: 'sharp cheddar cheese', category: INGREDIENT_CATEGORY.DAIRY },
        SKIM_MILK: {
            name: 'skim milk', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY3NjUwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SOUR_CREAM: {
            name: 'sour cream', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1633893215271-f7e1fca081ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTgxMzk3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SWISS_CHEESE: { name: 'swiss cheese', category: INGREDIENT_CATEGORY.DAIRY },
        TWO_PERCENT_MILK: {
            name: '2% milk', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY3NjUwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        UNSALTED_BUTTER: {
            name: 'unsalted butter', category: INGREDIENT_CATEGORY.DAIRY, img: "https://plus.unsplash.com/premium_photo-1699651798312-dd6d2734b4fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY3NzQ4fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        VEGAN_BUTTER: { name: 'vegan butter', category: INGREDIENT_CATEGORY.DAIRY },
        WHIPPED_CREAM: {
            name: 'whipped cream', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1583130879758-db8ac95a9b68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTgxMjcwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        WHIPPED_TOPPING: {
            name: 'whipped topping', category: INGREDIENT_CATEGORY.DAIRY
        },
        WHOLE_MILK: {
            name: 'whole milk', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY3NjUwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        YOGURT: {
            name: 'yogurt', category: INGREDIENT_CATEGORY.DAIRY, img: "https://images.unsplash.com/photo-1571230389215-b34a89739ef1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTgxMTc5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
    },
    DELI: {
        BACON: {
            name: 'bacon', category: INGREDIENT_CATEGORY.DELI, img: "https://images.unsplash.com/photo-1592086326871-f7cf2f1801ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY2NzAxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BACON_BITS: { name: 'bacon bits', category: INGREDIENT_CATEGORY.DELI },
        BOLOGNA: { name: 'bologna', category: INGREDIENT_CATEGORY.DELI },
        BREAKFAST_SAUSAGE: { name: 'breakfast sausage', category: INGREDIENT_CATEGORY.DELI },
        CANADIAN_BACON: { name: 'canadian bacon', category: INGREDIENT_CATEGORY.DELI },
        CHICKEN_PATE: { name: 'chicken pate', category: INGREDIENT_CATEGORY.DELI },
        CHINESE_SAUSAGE: { name: 'chinese sausage', category: INGREDIENT_CATEGORY.DELI },
        CHORIZO: { name: 'chorizo', category: INGREDIENT_CATEGORY.DELI },
        COOKED_HAM: {
            name: 'cooked ham', category: INGREDIENT_CATEGORY.DELI, img: "https://images.unsplash.com/photo-1524438418049-ab2acb7aa48f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTczMTgyfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        HOT_DOG: {
            name: 'hot dog', category: INGREDIENT_CATEGORY.DELI, img: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4OTcxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        ITALIAN_SAUSAGE: { name: 'italian sausage', category: INGREDIENT_CATEGORY.DELI },
        JOHNSONVILLE: { name: 'johnsonville', category: INGREDIENT_CATEGORY.DELI },
        MINI_HOT_DOG: { name: 'mini hot dog', category: INGREDIENT_CATEGORY.DELI },
        PANCETTA: { name: 'pancetta', category: INGREDIENT_CATEGORY.DELI },
        PASTRAMI: {
            name: 'pastrami', category: INGREDIENT_CATEGORY.DELI, img: "https://images.unsplash.com/photo-1483168729556-71adc94bef6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDYwNTQ4fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        PEPPERONI: {
            name: 'pepperoni', category: INGREDIENT_CATEGORY.DELI, img: "https://images.unsplash.com/photo-1563299416-3244785dbf1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDYwNDcyfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        POLISH_KIELBASA: { name: 'polish kielbasa', category: INGREDIENT_CATEGORY.DELI },
        PORK_PATE: { name: 'pork pate', category: INGREDIENT_CATEGORY.DELI },
        PROSCIUTTO: { name: 'prosciutto', category: INGREDIENT_CATEGORY.DELI },
        ROASTED_CHICKEN: { name: 'roasted chicken', category: INGREDIENT_CATEGORY.DELI },
        ROASTED_TURKEY: {
            name: 'roasted turkey', category: INGREDIENT_CATEGORY.DELI, img: "https://plus.unsplash.com/premium_photo-1664472757995-3260cd26e477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTczMDQxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SALAMI: { name: 'salami', category: INGREDIENT_CATEGORY.DELI },
        SAUSAGE: { name: 'sausage', category: INGREDIENT_CATEGORY.DELI },
        SAUSAGE_LINK: { name: 'sausage link', category: INGREDIENT_CATEGORY.DELI },
        SAUSAGE_PATTY: { name: 'sausage patty', category: INGREDIENT_CATEGORY.DELI },
        SUMMER_SAUSAGE: { name: 'summer sausage', category: INGREDIENT_CATEGORY.DELI },
    },
    FROZEN: {
        BUTTER_PECAN_ICE_CREAM: { name: 'butter pecan ice cream', category: INGREDIENT_CATEGORY.FROZEN },
        CHICKEN_FINGERS: { name: 'chicken fingers', category: INGREDIENT_CATEGORY.FROZEN },
        CHICKEN_NUGGETS: { name: 'chicken nuggets', category: INGREDIENT_CATEGORY.FROZEN },
        CHICKEN_POT_PIE: { name: 'chicken pot pie', category: INGREDIENT_CATEGORY.FROZEN },
        CHICKEN_STRIPS: { name: 'chicken strips', category: INGREDIENT_CATEGORY.FROZEN },
        CHOCOLATE_CHIP_ICE_CREAM: { name: 'chocolate chip ice cream', category: INGREDIENT_CATEGORY.FROZEN },
        CHOCOLATE_ICE_CREAM: { name: 'chocolate ice cream', category: INGREDIENT_CATEGORY.FROZEN },
        COOKIE_DOUGH_ICE_CREAM: { name: 'cookie dough ice cream', category: INGREDIENT_CATEGORY.FROZEN },
        COOKIES_AND_CREAM_ICE_CREAM: { name: 'cookies and cream ice cream', category: INGREDIENT_CATEGORY.FROZEN },
        CORNDOGS: { name: 'corndogs', category: INGREDIENT_CATEGORY.FROZEN },
        DUMPLINGS: { name: 'dumplings', category: INGREDIENT_CATEGORY.FROZEN },
        EGG_ROLLS: { name: 'egg rolls', category: INGREDIENT_CATEGORY.FROZEN },
        EGGO_WAFFLES: { name: 'eggo waffles', category: INGREDIENT_CATEGORY.FROZEN },
        FRENCH_FRIES: { name: 'french fries', category: INGREDIENT_CATEGORY.FROZEN },
        FRENCH_VANILLA_ICE_CREAM: { name: 'french vanilla ice cream', category: INGREDIENT_CATEGORY.FROZEN },
        FROZEN_BERRIES: { name: 'frozen berries', category: INGREDIENT_CATEGORY.FROZEN },
        FROZEN_BURRITOS: { name: 'frozen burritos', category: INGREDIENT_CATEGORY.FROZEN },
        FROZEN_CARROTS: { name: 'frozen carrots', category: INGREDIENT_CATEGORY.FROZEN },
        FROZEN_CORN: {
            name: 'frozen corn', category: INGREDIENT_CATEGORY.FROZEN, img: "https://images.unsplash.com/photo-1634467524884-897d0af5e104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTczMDA0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        FROZEN_EDAMAME: { name: 'frozen edamame', category: INGREDIENT_CATEGORY.FROZEN },
        FROZEN_LASAGNA: { name: 'frozen lasagna', category: INGREDIENT_CATEGORY.FROZEN },
        FROZEN_PEAS: {
            name: 'frozen peas', category: INGREDIENT_CATEGORY.FROZEN, img: "https://images.unsplash.com/photo-1560705185-d0291220a442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc2MDQzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        FROZEN_PIZZA: { name: 'frozen pizza', category: INGREDIENT_CATEGORY.FROZEN },
        FROZEN_VEGETABLES: { name: 'frozen vegetables', category: INGREDIENT_CATEGORY.FROZEN },
        FROZEN_CHEESE_STICKS: { name: 'frozen cheese sticks', category: INGREDIENT_CATEGORY.FROZEN },
        FROZEN_TAQUITOS: { name: 'frozen taquitos', category: INGREDIENT_CATEGORY.FROZEN },
        GRAHAM_CANYON_ICE_CREAM: { name: 'graham canyon ice cream', category: INGREDIENT_CATEGORY.FROZEN },
        GREEN_TEA_ICE_CREAM: { name: 'green tea ice cream', category: INGREDIENT_CATEGORY.FROZEN },
        GYOZA: { name: 'gyoza', category: INGREDIENT_CATEGORY.FROZEN },
        ICE_CREAM: { name: 'ice cream', category: INGREDIENT_CATEGORY.FROZEN },
        ICE_CREAM_SANDWICHES: { name: 'ice cream sandwiches', category: INGREDIENT_CATEGORY.FROZEN },
        MATCHA_ICE_CREAM: { name: 'matcha ice cream', category: INGREDIENT_CATEGORY.FROZEN },
        MINI_CORNDOGS: { name: 'mini corndogs', category: INGREDIENT_CATEGORY.FROZEN },
        MINT_ICE_CREAM: { name: 'mint ice cream', category: INGREDIENT_CATEGORY.FROZEN },
        MOOSE_TRACKS_ICE_CREAM: { name: 'moose tracks ice cream', category: INGREDIENT_CATEGORY.FROZEN },
        NEAPOLITAN_ICE_CREAM: { name: 'neapolitan ice cream', category: INGREDIENT_CATEGORY.FROZEN },
        PISTACHIO_ICE_CREAM: { name: 'pistachio ice cream', category: INGREDIENT_CATEGORY.FROZEN },
        PIZZA: { name: 'pizza', category: INGREDIENT_CATEGORY.FROZEN },
        PIZZA_ROLLS: { name: 'pizza rolls', category: INGREDIENT_CATEGORY.FROZEN },
        POPSICLES: { name: 'popsicles', category: INGREDIENT_CATEGORY.FROZEN },
        RASPBERRY_ICE_CREAM: { name: 'raspberry ice cream', category: INGREDIENT_CATEGORY.FROZEN },
        ROCKY_ROAD_ICE_CREAM: { name: 'rocky road ice cream', category: INGREDIENT_CATEGORY.FROZEN },
        SALTED_CARAMEL_ICE_CREAM: { name: 'salted caramel ice cream', category: INGREDIENT_CATEGORY.FROZEN },
        STEAK_FRIES: { name: 'steak fries', category: INGREDIENT_CATEGORY.FROZEN },
        STRAWBERRY_ICE_CREAM: { name: 'strawberry ice cream', category: INGREDIENT_CATEGORY.FROZEN },
        TOFFEE_ICE_CREAM: { name: 'toffee ice cream', category: INGREDIENT_CATEGORY.FROZEN },
        TURTLE_ICE_CREAM: { name: 'turtle ice cream', category: INGREDIENT_CATEGORY.FROZEN },
        VANILLA_ICE_CREAM: { name: 'vanilla ice cream', category: INGREDIENT_CATEGORY.FROZEN },
        WAFFLE_FRIES: { name: 'waffle fries', category: INGREDIENT_CATEGORY.FROZEN },
    },
    FURNITURE: {
        ARMCHAIR: { name: 'armchair', category: INGREDIENT_CATEGORY.FURNITURE },
        BARSTOOL: { name: 'barstool', category: INGREDIENT_CATEGORY.FURNITURE },
        BEANBAG: { name: 'beanbag', category: INGREDIENT_CATEGORY.FURNITURE },
        BEANBAG_CHAIR: { name: 'beanbag chair', category: INGREDIENT_CATEGORY.FURNITURE },
        BED: { name: 'bed', category: INGREDIENT_CATEGORY.FURNITURE },
        BED_FRAME: { name: 'bed frame', category: INGREDIENT_CATEGORY.FURNITURE },
        BEDDING: { name: 'bedding', category: INGREDIENT_CATEGORY.FURNITURE },
        BENCH: { name: 'bench', category: INGREDIENT_CATEGORY.FURNITURE },
        BOOKCASE: { name: 'bookcase', category: INGREDIENT_CATEGORY.FURNITURE },
        BUFFET: { name: 'buffet', category: INGREDIENT_CATEGORY.FURNITURE },
        CABINET: { name: 'cabinet', category: INGREDIENT_CATEGORY.FURNITURE },
        CHAIR: { name: 'chair', category: INGREDIENT_CATEGORY.FURNITURE },
        CHEST: { name: 'chest', category: INGREDIENT_CATEGORY.FURNITURE },
        COFFEE_TABLE: { name: 'coffee table', category: INGREDIENT_CATEGORY.FURNITURE },
        COUCH: { name: 'couch', category: INGREDIENT_CATEGORY.FURNITURE },
        CURIO: { name: 'curio', category: INGREDIENT_CATEGORY.FURNITURE },
        DESK: { name: 'desk', category: INGREDIENT_CATEGORY.FURNITURE },
        DINING_TABLE: { name: 'dining table', category: INGREDIENT_CATEGORY.FURNITURE },
        DRESSER: { name: 'dresser', category: INGREDIENT_CATEGORY.FURNITURE },
        END_TABLE: { name: 'end table', category: INGREDIENT_CATEGORY.FURNITURE },
        FITTED_SHEETS: { name: 'fitted sheets', category: INGREDIENT_CATEGORY.FURNITURE },
        FLAT_SHEETS: { name: 'flat sheets', category: INGREDIENT_CATEGORY.FURNITURE },
        FLOATING_SHELF: { name: 'floating shelf', category: INGREDIENT_CATEGORY.FURNITURE },
        FLOATING_SHELVES: { name: 'floating shelves', category: INGREDIENT_CATEGORY.FURNITURE },
        FUTON: { name: 'futon', category: INGREDIENT_CATEGORY.FURNITURE },
        HEADBOARD: { name: 'headboard', category: INGREDIENT_CATEGORY.FURNITURE },
        HUTCH: { name: 'hutch', category: INGREDIENT_CATEGORY.FURNITURE },
        LAMP: { name: 'lamp', category: INGREDIENT_CATEGORY.FURNITURE },
        LOVESEAT: { name: 'loveseat', category: INGREDIENT_CATEGORY.FURNITURE },
        MATTRESS: { name: 'mattress', category: INGREDIENT_CATEGORY.FURNITURE },
        MIRROR: { name: 'mirror', category: INGREDIENT_CATEGORY.FURNITURE },
        NIGHTSTAND: { name: 'nightstand', category: INGREDIENT_CATEGORY.FURNITURE },
        OTTOMAN: { name: 'ottoman', category: INGREDIENT_CATEGORY.FURNITURE },
        PAINTING: { name: 'painting', category: INGREDIENT_CATEGORY.FURNITURE },
        PICTURE_FRAME: { name: 'picture frame', category: INGREDIENT_CATEGORY.FURNITURE },
        PILLOW: { name: 'pillow', category: INGREDIENT_CATEGORY.FURNITURE },
        PILLOWCASE: { name: 'pillowcase', category: INGREDIENT_CATEGORY.FURNITURE },
        RECLINER: { name: 'recliner', category: INGREDIENT_CATEGORY.FURNITURE },
        ROCKING_CHAIR: { name: 'rocking chair', category: INGREDIENT_CATEGORY.FURNITURE },
        SECTIONAL: { name: 'sectional', category: INGREDIENT_CATEGORY.FURNITURE },
        SHELF: { name: 'shelf', category: INGREDIENT_CATEGORY.FURNITURE },
        SOFA: { name: 'sofa', category: INGREDIENT_CATEGORY.FURNITURE },
        SOFA_BED: { name: 'sofa bed', category: INGREDIENT_CATEGORY.FURNITURE },
        STOOL: { name: 'stool', category: INGREDIENT_CATEGORY.FURNITURE },
        TABLE: { name: 'table', category: INGREDIENT_CATEGORY.FURNITURE },
        TV_STAND: { name: 'tv stand', category: INGREDIENT_CATEGORY.FURNITURE },
        VANITY: { name: 'vanity', category: INGREDIENT_CATEGORY.FURNITURE },
        WARDROBE: { name: 'wardrobe', category: INGREDIENT_CATEGORY.FURNITURE },
        WATERBED: { name: 'waterbed', category: INGREDIENT_CATEGORY.FURNITURE },
    },
    GARDEN: {
        BIRD_SEED: { name: 'bird seed', category: INGREDIENT_CATEGORY.GARDEN },
        FLOWER_POT: { name: 'flower pot', category: INGREDIENT_CATEGORY.GARDEN },
        GARDEN_SOIL: { name: 'garden soil', category: INGREDIENT_CATEGORY.GARDEN },
        GRASS_SEED: { name: 'grass seed', category: INGREDIENT_CATEGORY.GARDEN },
        HERB_PLANTS: { name: 'herb plants', category: INGREDIENT_CATEGORY.GARDEN },
        HOUSE_PLANTS: { name: 'house plants', category: INGREDIENT_CATEGORY.GARDEN },
        MULCH: { name: 'mulch', category: INGREDIENT_CATEGORY.GARDEN },
        PLANT_FOOD: { name: 'plant food', category: INGREDIENT_CATEGORY.GARDEN },
        PLANT_POTS: { name: 'plant pots', category: INGREDIENT_CATEGORY.GARDEN },
        SEEDS: { name: 'seeds', category: INGREDIENT_CATEGORY.GARDEN },
        SHRUBS: { name: 'shrubs', category: INGREDIENT_CATEGORY.GARDEN },
        SOIL: { name: 'soil', category: INGREDIENT_CATEGORY.GARDEN },
        SUCCULENTS: { name: 'succulents', category: INGREDIENT_CATEGORY.GARDEN },
        TREE: { name: 'tree', category: INGREDIENT_CATEGORY.GARDEN },
        VEGETABLE_PLANTS: { name: 'vegetable plants', category: INGREDIENT_CATEGORY.GARDEN },
        VINES: { name: 'vines', category: INGREDIENT_CATEGORY.GARDEN },
    },
    GRAIN: {
        ARBORIO_RICE: { name: 'arborio rice', category: INGREDIENT_CATEGORY.GRAIN },
        ANGEL_HAIR_PASTA: { name: 'angel hair pasta', category: INGREDIENT_CATEGORY.GRAIN },
        BAGELS: {
            name: 'bagels', category: INGREDIENT_CATEGORY.GRAIN, img: "https://images.unsplash.com/photo-1518562923427-19e694fbd8e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcwOTA3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BAGUETTE: { name: 'baguette', category: INGREDIENT_CATEGORY.GRAIN },
        BASMATI_RICE: { name: 'basmati rice', category: INGREDIENT_CATEGORY.GRAIN },
        BISQUICK_CAKE_MIX: { name: 'bisquick cake mix', category: INGREDIENT_CATEGORY.GRAIN },
        BOW_TIE_NOODLES: {
            name: 'bow tie noodles', category: INGREDIENT_CATEGORY.GRAIN, img: "https://plus.unsplash.com/premium_photo-1723802451266-59fecf0546d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcxOTA1fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BRIOCHE_BUNS: { name: 'brioche buns', category: INGREDIENT_CATEGORY.GRAIN },
        BREAD: {
            name: 'bread', category: INGREDIENT_CATEGORY.GRAIN, img: "https://plus.unsplash.com/premium_photo-1675788939191-713c2abf3da6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcwODI4fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BREAD_BOWLS: {
            name: 'bread bowls', category: INGREDIENT_CATEGORY.GRAIN, img: "https://plus.unsplash.com/premium_photo-1666675707746-ec5f0e689d97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcxNTgwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BROWN_LENTILS: { name: 'brown lentils', category: INGREDIENT_CATEGORY.GRAIN },
        BROWN_RICE: {
            name: 'brown rice', category: INGREDIENT_CATEGORY.GRAIN, img: "https://plus.unsplash.com/premium_photo-1671130295823-78f170465794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwMDAxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BROWN_RICE_NOODLES: { name: 'brown rice noodles', category: INGREDIENT_CATEGORY.GRAIN },
        BULGUR_WHEAT: { name: 'bulgur wheat', category: INGREDIENT_CATEGORY.GRAIN },
        CHOW_MEIN_NOODLES: {
            name: 'chow mein noodles', category: INGREDIENT_CATEGORY.GRAIN, img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcxNjMwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CRESCENT_ROLLS: { name: 'crescent rolls', category: INGREDIENT_CATEGORY.GRAIN },
        CROISSANT_DOUGH: {
            name: 'croissant dough', category: INGREDIENT_CATEGORY.GRAIN, img: "https://images.unsplash.com/photo-1534448227926-b7d7fdf991b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcwOTM5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        DRIED_RAMEN_NOODLES: {
            name: 'dried ramen noodles', category: INGREDIENT_CATEGORY.GRAIN, img: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4NzY2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        DRIED_RICE_NOODLES: { name: 'dried rice noodles', category: INGREDIENT_CATEGORY.GRAIN },
        DURUM_WHEAT: { name: 'durum wheat', category: INGREDIENT_CATEGORY.GRAIN },
        EGG_NOODLES: { name: 'egg noodles', category: INGREDIENT_CATEGORY.GRAIN },
        ELBOW_MACARONI: { name: 'elbow macaroni', category: INGREDIENT_CATEGORY.GRAIN },
        FETTUCCINE_NOODLES: {
            name: 'fettuccine noodles', category: INGREDIENT_CATEGORY.GRAIN, img: "https://plus.unsplash.com/premium_photo-1670368205131-a1761aea404a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcxMzQ2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        FLOUR_TORTILLA: {
            name: 'flour tortilla', category: INGREDIENT_CATEGORY.GRAIN, img: "https://images.unsplash.com/photo-1591266123515-46149ea0b0a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcwOTkxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        FRENCH_BREAD: { name: 'french bread', category: INGREDIENT_CATEGORY.GRAIN },
        FRENCH_BREAD_ROLLS: { name: 'french bread rolls', category: INGREDIENT_CATEGORY.GRAIN },
        FRESH_RAMEN_NOODLES: {
            name: 'fresh ramen noodles', category: INGREDIENT_CATEGORY.GRAIN, img: "https://images.unsplash.com/photo-1628919311414-1ee37e9ed8ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcxMTkyfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        FRESH_RICE_NOODLES: { name: 'fresh rice noodles', category: INGREDIENT_CATEGORY.GRAIN },
        HAMBURGER_BUNS: { name: 'hamburger buns', category: INGREDIENT_CATEGORY.GRAIN },
        HAWAIIAN_ROLLS: { name: 'hawaiian rolls', category: INGREDIENT_CATEGORY.GRAIN },
        HOAGIE_BREAD: { name: 'hoagie bread', category: INGREDIENT_CATEGORY.GRAIN },
        HOT_DOG_BUNS: { name: 'hot dog buns', category: INGREDIENT_CATEGORY.GRAIN },
        JASMINE_RICE: { name: 'jasmine rice', category: INGREDIENT_CATEGORY.GRAIN },
        KODIAK_CAKE_MIX: { name: 'kodiak cake mix', category: INGREDIENT_CATEGORY.GRAIN },
        KOREAN_GLASS_NOODLES: { name: 'korean glass noodles', category: INGREDIENT_CATEGORY.GRAIN },
        LASAGNA_NOODLES: { name: 'lasagna noodles', category: INGREDIENT_CATEGORY.GRAIN },
        LO_MEIN_NOODLES: { name: 'lo mein noodles', category: INGREDIENT_CATEGORY.GRAIN },
        MACARONI_AND_CHEESE: {
            name: 'macaroni and cheese', category: INGREDIENT_CATEGORY.GRAIN, img: "https://plus.unsplash.com/premium_photo-1725635594774-e9d718ee4f12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY3MzIzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        MOCHIKO: { name: 'mochiko', category: INGREDIENT_CATEGORY.GRAIN },
        ORZO: { name: 'orzo', category: INGREDIENT_CATEGORY.GRAIN },
        PAPPARDELLE_NOODLES: { name: 'pappardelle noodles', category: INGREDIENT_CATEGORY.GRAIN },
        PENNE: {
            name: 'penne', category: INGREDIENT_CATEGORY.GRAIN, img: "https://plus.unsplash.com/premium_photo-1705337959675-b36665191fb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY3MjkzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        PITA_BREAD: {
            name: 'pita bread', category: INGREDIENT_CATEGORY.GRAIN,
        },
        ROLLS: {
            name: 'rolls', category: INGREDIENT_CATEGORY.GRAIN, img: "https://plus.unsplash.com/premium_photo-1672639601872-eeceb0c5c522?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcxMTMxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        RYE_BREAD: { name: 'rye bread', category: INGREDIENT_CATEGORY.GRAIN },
        SHORT_GRAINED_RICE: { name: 'short-grained rice', category: INGREDIENT_CATEGORY.GRAIN },
        SOURDOUGH_BREAD: { name: 'sourdough bread', category: INGREDIENT_CATEGORY.GRAIN },
        SOURDOUGH_STARTER: { name: 'sourdough starter', category: INGREDIENT_CATEGORY.GRAIN },
        SPINACH_CHEESE_TORTELLINI: { name: 'spinach cheese tortellini', category: INGREDIENT_CATEGORY.GRAIN },
        SPAGHETTI_NOODLES: {
            name: 'spaghetti noodles', category: INGREDIENT_CATEGORY.GRAIN, img: "https://plus.unsplash.com/premium_photo-1705409892694-39677f828078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY3MzY3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SPRING_ROLL_WRAPPER: { name: 'spring roll wrapper', category: INGREDIENT_CATEGORY.GRAIN },
        SPRING_ROLL_RICE_WRAPPERS: { name: 'spring roll rice wrappers', category: INGREDIENT_CATEGORY.GRAIN },
        SUSHI_RICE: {
            name: 'sushi rice', category: INGREDIENT_CATEGORY.GRAIN, img: "https://images.unsplash.com/photo-1613758235256-43a7bdc21d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTU5OTI4fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SWEET_RICE: { name: 'sweet rice', category: INGREDIENT_CATEGORY.GRAIN },
        TORTILLA: { name: 'tortilla', category: INGREDIENT_CATEGORY.GRAIN, img: "https://images.unsplash.com/photo-1591266123515-46149ea0b0a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcwOTkxfA&ixlib=rb-4.0.3&q=80&w=400" },
        VERMICELLI_RICE_NOODLES: { name: 'vermicelli rice noodles', category: INGREDIENT_CATEGORY.GRAIN },
        UDON_NOODLES: { name: 'udon noodles', category: INGREDIENT_CATEGORY.GRAIN },
        WHEAT_TORTILLA: {
            name: 'wheat tortilla', category: INGREDIENT_CATEGORY.GRAIN, img: "https://images.unsplash.com/photo-1600935926387-12d9b03066f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcxMDIwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        WHITE_RICE: {
            name: 'white rice', category: INGREDIENT_CATEGORY.GRAIN, img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTU5ODE4fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        ZITI: { name: 'ziti', category: INGREDIENT_CATEGORY.GRAIN },
    },
    HEALTH: {
        ADVIL: { name: 'advil', category: INGREDIENT_CATEGORY.HEALTH },
        ALLERGY_MEDICINE: { name: 'allergy medicine', category: INGREDIENT_CATEGORY.HEALTH },
        ALOE_VERA: { name: 'aloe vera', category: INGREDIENT_CATEGORY.HEALTH },
        ANTACID: { name: 'antacid', category: INGREDIENT_CATEGORY.HEALTH },
        ANTIBIOTIC_OINTMENT: { name: 'antibiotic ointment', category: INGREDIENT_CATEGORY.HEALTH },
        ASPIRIN: { name: 'aspirin', category: INGREDIENT_CATEGORY.HEALTH },
        BANDAID: { name: 'bandaid', category: INGREDIENT_CATEGORY.HEALTH },
        BAYER: { name: 'bayer', category: INGREDIENT_CATEGORY.HEALTH },
        CLARITIN: { name: 'claritin', category: INGREDIENT_CATEGORY.HEALTH },
        CLOTH_TAPE: { name: 'cloth tape', category: INGREDIENT_CATEGORY.HEALTH },
        FIRST_AID_KIT: { name: 'first aid kit', category: INGREDIENT_CATEGORY.HEALTH },
        GAUZE: { name: 'gauze', category: INGREDIENT_CATEGORY.HEALTH },
        IBUPROFEN: { name: 'ibuprofen', category: INGREDIENT_CATEGORY.HEALTH },
        INSULIN: { name: 'insulin', category: INGREDIENT_CATEGORY.HEALTH },
        LAXATIVE: { name: 'laxative', category: INGREDIENT_CATEGORY.HEALTH },
        MOLTRIN: { name: 'moltrin', category: INGREDIENT_CATEGORY.HEALTH },
        MULTI_VITAMINS: { name: 'multi vitamins', category: INGREDIENT_CATEGORY.HEALTH },
        TUMS: { name: 'tums', category: INGREDIENT_CATEGORY.HEALTH },
        TWEEZERS: { name: 'tweezers', category: INGREDIENT_CATEGORY.HEALTH },
        TYLENOL: { name: 'tylenol', category: INGREDIENT_CATEGORY.HEALTH },
        VITAMIN_C_TABLETS: { name: 'vitamin c tablets', category: INGREDIENT_CATEGORY.HEALTH },
        EX_LAX: { name: 'ex-lax', category: INGREDIENT_CATEGORY.HEALTH },
    },
    HOUSEWARES: {
        AIR_FRESHENER: { name: 'air freshener', category: INGREDIENT_CATEGORY.HOUSEWARES },
        BATHROOM_CADDY: { name: 'bathroom caddy', category: INGREDIENT_CATEGORY.HOUSEWARES },
        BATHROOM_CLEANER: { name: 'bathroom cleaner', category: INGREDIENT_CATEGORY.HOUSEWARES },
        BATTERIES: { name: 'batteries', category: INGREDIENT_CATEGORY.HOUSEWARES },
        BROOM: { name: 'broom', category: INGREDIENT_CATEGORY.HOUSEWARES },
        BUCKET: { name: 'bucket', category: INGREDIENT_CATEGORY.HOUSEWARES },
        CANDLES: { name: 'candles', category: INGREDIENT_CATEGORY.HOUSEWARES },
        CARBON_MONOXIDE_DETECTER: { name: 'carbon monoxide detecter', category: INGREDIENT_CATEGORY.HOUSEWARES },
        CLEANING_GLOVES: { name: 'cleaning gloves', category: INGREDIENT_CATEGORY.HOUSEWARES },
        CUPBOARD_ORGANIZER: { name: 'cupboard organizer', category: INGREDIENT_CATEGORY.HOUSEWARES },
        DISH_RACK: { name: 'dish rack', category: INGREDIENT_CATEGORY.HOUSEWARES },
        DISH_SOAP: { name: 'dish soap', category: INGREDIENT_CATEGORY.HOUSEWARES },
        DISH_SPONGE: { name: 'dish sponge', category: INGREDIENT_CATEGORY.HOUSEWARES },
        DISHWASHER_DETERGENT: { name: 'dishwasher detergent', category: INGREDIENT_CATEGORY.HOUSEWARES },
        DISINFECTING_WIPES: { name: 'disinfecting wipes', category: INGREDIENT_CATEGORY.HOUSEWARES },
        DRYER_BALLS: { name: 'dryer balls', category: INGREDIENT_CATEGORY.HOUSEWARES },
        DRYER_SHEETS: { name: 'dryer sheets', category: INGREDIENT_CATEGORY.HOUSEWARES },
        DRYING_RACK: { name: 'drying rack', category: INGREDIENT_CATEGORY.HOUSEWARES },
        DUSTER: { name: 'duster', category: INGREDIENT_CATEGORY.HOUSEWARES },
        DUSTPAN: { name: 'dustpan', category: INGREDIENT_CATEGORY.HOUSEWARES },
        FIRE_EXTINGUISHER: { name: 'fire extinguisher', category: INGREDIENT_CATEGORY.HOUSEWARES },
        FLASHLIGHT: { name: 'flashlight', category: INGREDIENT_CATEGORY.HOUSEWARES },
        FOUR_OH_NINE_CLEANER: { name: '409 cleaner', category: INGREDIENT_CATEGORY.HOUSEWARES },
        GLASS_CLEANER: { name: 'glass cleaner', category: INGREDIENT_CATEGORY.HOUSEWARES },
        HAMPER: { name: 'hamper', category: INGREDIENT_CATEGORY.HOUSEWARES },
        HAND_SOAP: { name: 'hand soap', category: INGREDIENT_CATEGORY.HOUSEWARES },
        HANGERS: { name: 'hangers', category: INGREDIENT_CATEGORY.HOUSEWARES },
        IRON: { name: 'iron', category: INGREDIENT_CATEGORY.HOUSEWARES },
        IRONING_BOARD: { name: 'ironing board', category: INGREDIENT_CATEGORY.HOUSEWARES },
        KITCHEN_CADDY: { name: 'kitchen caddy', category: INGREDIENT_CATEGORY.HOUSEWARES },
        LAUNDRY_BASKET: { name: 'laundry basket', category: INGREDIENT_CATEGORY.HOUSEWARES },
        LAUNDRY_DETERGENT: { name: 'laundry detergent', category: INGREDIENT_CATEGORY.HOUSEWARES },
        LINT_ROLLER: { name: 'lint roller', category: INGREDIENT_CATEGORY.HOUSEWARES },
        MATCHES: { name: 'matches', category: INGREDIENT_CATEGORY.HOUSEWARES },
        MOP: { name: 'mop', category: INGREDIENT_CATEGORY.HOUSEWARES },
        MULTI_PURPOSE_CLEANER: { name: 'multi-purpose cleaner', category: INGREDIENT_CATEGORY.HOUSEWARES },
        PAPER_TOWELS: { name: 'paper towels', category: INGREDIENT_CATEGORY.HOUSEWARES },
        PLUNGER: { name: 'plunger', category: INGREDIENT_CATEGORY.HOUSEWARES },
        SOAP_DISPENSER: { name: 'soap dispenser', category: INGREDIENT_CATEGORY.HOUSEWARES },
        SCRUB_BRUSH: { name: 'scrub brush', category: INGREDIENT_CATEGORY.HOUSEWARES },
        SCRUB_CLEANER: { name: 'scrub cleaner', category: INGREDIENT_CATEGORY.HOUSEWARES },
        SILVERWARE_TRAYS: { name: 'silverware trays', category: INGREDIENT_CATEGORY.HOUSEWARES },
        SINK_CADDY: { name: 'sink caddy', category: INGREDIENT_CATEGORY.HOUSEWARES },
        SMOKE_ALARMS: { name: 'smoke alarms', category: INGREDIENT_CATEGORY.HOUSEWARES },
        SPICE_RACK: { name: 'spice rack', category: INGREDIENT_CATEGORY.HOUSEWARES },
        SPONGE: { name: 'sponge', category: INGREDIENT_CATEGORY.HOUSEWARES },
        SQUEEGEE: { name: 'squeegee', category: INGREDIENT_CATEGORY.HOUSEWARES },
        STAIN_REMOVER: { name: 'stain remover', category: INGREDIENT_CATEGORY.HOUSEWARES },
        STEEL_WOOL: { name: 'steel wool', category: INGREDIENT_CATEGORY.HOUSEWARES },
        TOILET_BOWL_CLEANER: { name: 'toilet bowl cleaner', category: INGREDIENT_CATEGORY.HOUSEWARES },
        TOILET_BRUSH: { name: 'toilet brush', category: INGREDIENT_CATEGORY.HOUSEWARES },
        TOILET_PAPER: { name: 'toilet paper', category: INGREDIENT_CATEGORY.HOUSEWARES },
        TOILET_PAPER_HOLDER: { name: 'toilet paper holder', category: INGREDIENT_CATEGORY.HOUSEWARES },
        TOOTHBRUSH_HOLDER: { name: 'toothbrush holder', category: INGREDIENT_CATEGORY.HOUSEWARES },
        TRASH_BAGS: { name: 'trash bags', category: INGREDIENT_CATEGORY.HOUSEWARES },
        TRASH_CAN: { name: 'trash can', category: INGREDIENT_CATEGORY.HOUSEWARES },
        VACUUM: { name: 'vacuum', category: INGREDIENT_CATEGORY.HOUSEWARES },
        WATER_FILTER: { name: 'water filter', category: INGREDIENT_CATEGORY.HOUSEWARES },
        WATER_PURIFIER: { name: 'water purifier', category: INGREDIENT_CATEGORY.HOUSEWARES },
        WINDEX_CLEANER: { name: 'windex cleaner', category: INGREDIENT_CATEGORY.HOUSEWARES },
    },
    MEAT: {
        ANDOUILLE_SAUSAGE: { name: 'andouille sausage', category: INGREDIENT_CATEGORY.MEAT },
        BEEF: {
            name: 'beef', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1690983325563-fe4412c4c347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwNjI3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BEEF_CHUCK_ROAST: {
            name: 'beef chuck roast', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1690983325563-fe4412c4c347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwNjI3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BEEF_ANGUS_EYE_ROUND_ROAST: {
            name: 'beef angus eye round roast', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1690983325563-fe4412c4c347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwNjI3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BEEF_NEW_YORK_STRIP: { name: 'beef new york strip', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1690983325563-fe4412c4c347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwNjI3fA&ixlib=rb-4.0.3&q=80&w=400" },
        BEEF_PATTIES: {
            name: 'beef patties', category: INGREDIENT_CATEGORY.MEAT, img: "https://plus.unsplash.com/premium_photo-1668616817140-bc9385635319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcwNDU5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BEEF_RIBEYE_STEAK: { name: 'beef ribeye steak', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1690983325563-fe4412c4c347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwNjI3fA&ixlib=rb-4.0.3&q=80&w=400" },
        BEEF_RIBS: { name: 'beef ribs', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1690983325563-fe4412c4c347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwNjI3fA&ixlib=rb-4.0.3&q=80&w=400" },
        BEEF_ROAST: { name: 'beef roast', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1690983325563-fe4412c4c347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwNjI3fA&ixlib=rb-4.0.3&q=80&w=400" },
        BEEF_ROUND_STEAK: { name: 'beef round steak', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1690983325563-fe4412c4c347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwNjI3fA&ixlib=rb-4.0.3&q=80&w=400" },
        BEEF_RUMP_ROAST: { name: 'beef rump roast', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1690983325563-fe4412c4c347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwNjI3fA&ixlib=rb-4.0.3&q=80&w=400" },
        BEEF_SIRLOIN: { name: 'beef sirloin', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1690983325563-fe4412c4c347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwNjI3fA&ixlib=rb-4.0.3&q=80&w=400" },
        BEEF_STEAK: { name: 'beef steak', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1690983325563-fe4412c4c347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwNjI3fA&ixlib=rb-4.0.3&q=80&w=400" },
        BEEF_STEW_MEAT: { name: 'beef stew meat', category: INGREDIENT_CATEGORY.MEAT },
        BEEF_TENDERLOIN: { name: 'beef tenderloin', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1690983325563-fe4412c4c347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwNjI3fA&ixlib=rb-4.0.3&q=80&w=400" },
        BEEF_TOP_SIRLOIN: { name: 'beef top sirloin', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1690983325563-fe4412c4c347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwNjI3fA&ixlib=rb-4.0.3&q=80&w=400" },
        BEEF_TRI_TIP_ROAST: { name: 'beef tri tip roast', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1690983325563-fe4412c4c347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwNjI3fA&ixlib=rb-4.0.3&q=80&w=400" },
        BONE_IN_HAM: {
            name: 'bone-in ham', category: INGREDIENT_CATEGORY.MEAT, img: "https://plus.unsplash.com/premium_photo-1664391728401-632c929690b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTczMjcwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BONELESS_CHICKEN_BREAST: {
            name: 'boneless chicken breast', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwMjk3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BONELESS_CHICKEN_THIGH: { name: 'boneless chicken thigh', category: INGREDIENT_CATEGORY.MEAT },
        BONELESS_AND_SKINLESS_CHICKEN_BREAST: {
            name: 'boneless, skinless chicken breast', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwMjk3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BONELESS_AND_SKINLESS_CHICKEN_THIGH: { name: 'boneless, skinless chicken thigh', category: INGREDIENT_CATEGORY.MEAT },
        BONELESS_PORK_CHOPS: { name: 'boneless pork chops', category: INGREDIENT_CATEGORY.MEAT },
        BUTTERBALL_TURKEY: { name: 'butterball turkey', category: INGREDIENT_CATEGORY.MEAT },
        CORNED_BEEF: { name: 'corned beef', category: INGREDIENT_CATEGORY.MEAT },
        CHICKEN: {
            name: 'chicken', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwMDg4fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CHICKEN_BREAST: {
            name: 'chicken breast', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwMjk3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CHICKEN_DRUMETTES: { name: 'chicken drumettes', category: INGREDIENT_CATEGORY.MEAT },
        CHICKEN_DRUMSTICKS: {
            name: 'chicken drumsticks', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1624364543842-b0472614eb68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwMjA1fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CHICKEN_THIGH: { name: 'chicken thigh', category: INGREDIENT_CATEGORY.MEAT },
        CHICKEN_WINGS: { name: 'chicken wings', category: INGREDIENT_CATEGORY.MEAT },
        FOSTER_FARM: { name: 'foster farm', category: INGREDIENT_CATEGORY.MEAT },
        FLANK_STEAK: { name: 'flank steak', category: INGREDIENT_CATEGORY.MEAT },
        GROUND_BEEF: {
            name: 'ground beef', category: INGREDIENT_CATEGORY.MEAT, img: "https://plus.unsplash.com/premium_photo-1668616816678-5f82734f1f40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwOTgzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        GROUND_CHICKEN: { name: 'ground chicken', category: INGREDIENT_CATEGORY.MEAT },
        GROUND_PORK: { name: 'ground pork', category: INGREDIENT_CATEGORY.MEAT },
        GROUND_TURKEY: { name: 'ground turkey', category: INGREDIENT_CATEGORY.MEAT },
        GUANCIALE: { name: 'guanciale', category: INGREDIENT_CATEGORY.MEAT },
        LAMB: { name: 'lamb', category: INGREDIENT_CATEGORY.MEAT },
        PORK: {
            name: 'pork', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1602470521085-1ac1703ebbf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcwMzU3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        PORK_BELLY: {
            name: 'pork belly', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1624174782964-e541742299ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcwMjY2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        PORK_BUTT: { name: 'pork butt', category: INGREDIENT_CATEGORY.MEAT },
        PORK_CHOPS: { name: 'pork chops', category: INGREDIENT_CATEGORY.MEAT },
        PORK_LOIN: { name: 'pork loin', category: INGREDIENT_CATEGORY.MEAT },
        PORK_RIBS: { name: 'pork ribs', category: INGREDIENT_CATEGORY.MEAT },
        PORK_ROAST: { name: 'pork roast', category: INGREDIENT_CATEGORY.MEAT },
        PORK_SHOULDER: { name: 'pork shoulder', category: INGREDIENT_CATEGORY.MEAT },
        PORK_TENDERLOINS: { name: 'pork tenderloins', category: INGREDIENT_CATEGORY.MEAT },
        ROTISSERIE_CHICKEN: {
            name: 'rotisserie chicken', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwMTY0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SKIRT_STEAK: { name: 'skirt steak', category: INGREDIENT_CATEGORY.MEAT },
        TURKEY: { name: 'turkey', category: INGREDIENT_CATEGORY.MEAT },
        WHOLE_CHICKEN: {
            name: 'whole chicken', category: INGREDIENT_CATEGORY.MEAT, img: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwMDg4fA&ixlib=rb-4.0.3&q=80&w=400"
        },
    },
    OFFICE: {
        BINDER: { name: 'binder', category: INGREDIENT_CATEGORY.OFFICE },
        BINDER_CLIP: { name: 'binder clip', category: INGREDIENT_CATEGORY.OFFICE },
        BINDER_DIVIDER: { name: 'binder divider', category: INGREDIENT_CATEGORY.OFFICE },
        EXPO_MARKER: { name: 'expo marker', category: INGREDIENT_CATEGORY.OFFICE },
        HIGHLIGHTER: { name: 'highlighter', category: INGREDIENT_CATEGORY.OFFICE },
        NOTEBOOK: { name: 'notebook', category: INGREDIENT_CATEGORY.OFFICE },
        PAPER: { name: 'paper', category: INGREDIENT_CATEGORY.OFFICE },
        PENCILS: { name: 'pencils', category: INGREDIENT_CATEGORY.OFFICE },
        PENS: { name: 'pens', category: INGREDIENT_CATEGORY.OFFICE },
        SCISSORS: { name: 'scissors', category: INGREDIENT_CATEGORY.OFFICE },
        TAPE: { name: 'tape', category: INGREDIENT_CATEGORY.OFFICE },
        WHITEBOARD: { name: 'whiteboard', category: INGREDIENT_CATEGORY.OFFICE },
        WHITEBOARD_MARKERS: { name: 'whiteboard markers', category: INGREDIENT_CATEGORY.OFFICE },
    },
    OILS: {
        APPLE_CIDER_VINEGAR: { name: 'apple cider vinegar', category: INGREDIENT_CATEGORY.OILS },
        AVOCADO_OIL: { name: 'avocado oil', category: INGREDIENT_CATEGORY.OILS, img: "https://images.unsplash.com/photo-1601039641847-7857b994d704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4NTE2fA&ixlib=rb-4.0.3&q=80&w=400" },
        BALSAMIC_VINEGAR: { name: 'balsamic vinegar', category: INGREDIENT_CATEGORY.OILS },
        CANOLA_OIL: { name: 'canola oil', category: INGREDIENT_CATEGORY.OILS },
        COOKING_SPRAY: { name: 'cooking spray', category: INGREDIENT_CATEGORY.OILS },
        GHEE: { name: 'ghee', category: INGREDIENT_CATEGORY.OILS },
        OLIVE_OIL: {
            name: 'olive oil', category: INGREDIENT_CATEGORY.OILS, img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4NzU5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        MIRIN: { name: 'mirin', category: INGREDIENT_CATEGORY.OILS },
        MUSTARD_OIL: { name: 'mustard oil', category: INGREDIENT_CATEGORY.OILS },
        PEANUT_OIL: {
            name: 'peanut oil', category: INGREDIENT_CATEGORY.OILS, img: "https://images.unsplash.com/photo-1549978113-29eb25c8177f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3NzE2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        RED_WINE: { name: 'red wine', category: INGREDIENT_CATEGORY.OILS },
        RED_WINE_VINEGAR: { name: 'red wine vinegar', category: INGREDIENT_CATEGORY.OILS },
        RICE_WINE_VINEGAR: { name: 'rice wine vinegar', category: INGREDIENT_CATEGORY.OILS },
        SESAME_OIL: { name: 'sesame oil', category: INGREDIENT_CATEGORY.OILS },
        SHAOXING_WINE: { name: 'shaoxing wine', category: INGREDIENT_CATEGORY.OILS },
        VEGETABLE_OIL: { name: 'vegetable oil', category: INGREDIENT_CATEGORY.OILS },
        WHITE_WINE: { name: 'white wine', category: INGREDIENT_CATEGORY.OILS },
        WHITE_VINEGAR: { name: 'white vinegar', category: INGREDIENT_CATEGORY.OILS },
    },
    OTHER: {},
    PET: {
        CAT_FOOD: { name: 'cat food', category: INGREDIENT_CATEGORY.PET },
        CAT_LITTER: { name: 'cat litter', category: INGREDIENT_CATEGORY.PET },
        DOG_FOOD: { name: 'dog food', category: INGREDIENT_CATEGORY.PET },
        DOG_TREATS: { name: 'dog treats', category: INGREDIENT_CATEGORY.PET },
        FISH_FOOD: { name: 'fish food', category: INGREDIENT_CATEGORY.PET },
        LEASH: { name: 'leash', category: INGREDIENT_CATEGORY.PET },
        HAMSTER_FOOD: { name: 'hamster food', category: INGREDIENT_CATEGORY.PET },
        PET_SHAMPOO: { name: 'pet shampoo', category: INGREDIENT_CATEGORY.PET },
        PET_STAIN_REMOVER: { name: 'pet stain remover', category: INGREDIENT_CATEGORY.PET },
        PET_TOYS: { name: 'pet toys', category: INGREDIENT_CATEGORY.PET },
        PET_TREATS: { name: 'pet treats', category: INGREDIENT_CATEGORY.PET },
    },
    PRODUCE: {
        ACORN_SQUASH: { name: 'acorn squash', category: INGREDIENT_CATEGORY.PRODUCE },
        APPLE: {
            name: 'apple', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://plus.unsplash.com/premium_photo-1674262321087-bfcd8135fdc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4MTIyfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        APRICOT: {
            name: 'apricot', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1627931754115-478ed65b4fef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcwNjQ4fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        ARTICHOKE: {
            name: 'artichoke', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1560513011-72b6992677f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc0NTEyfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        ASIAN_SALAD_KIT: { name: 'asian salad kit', category: INGREDIENT_CATEGORY.PRODUCE },
        ASPARAGUS: {
            name: 'asparagus', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1629875235163-2e52306e4018?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc0NTU1fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        AVOCADO: {
            name: 'avocado', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1601039641847-7857b994d704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4NTE2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BABY_ARUGULA: {
            name: 'baby arugula', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://plus.unsplash.com/premium_photo-1675715402954-1107ca03341d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc0NjEzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BABY_BOK_CHOY: {
            name: 'baby bok choy', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1515192558558-17a7c4904ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc0NjcwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BABY_CARROT: {
            name: 'baby carrot', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc0NzE0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BABY_KALE: {
            name: 'baby kale', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1624300477446-d379e923eca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTczNTQ1fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BABY_POTATO: { name: 'baby potato', plural: 'baby potatoes', category: INGREDIENT_CATEGORY.PRODUCE },
        BABY_SPINACH: {
            name: 'baby spinach', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://plus.unsplash.com/premium_photo-1701699257548-8261a687236f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc5MzY5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BAMBOO_SHOOT: { name: 'bamboo shoot', category: INGREDIENT_CATEGORY.PRODUCE },
        BANANA: {
            name: 'banana', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY5ODU3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BANANA_LEAF: {
            name: 'banana leaf', plural: 'banana leaves', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1551551313-fe7031e26248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc5MzA0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BASIL_LEAF: {
            name: 'basil leaf', plural: 'basil leaves', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://plus.unsplash.com/premium_photo-1673264299641-397fa130e4a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY5OTM5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BEAN_SPROUT: {
            name: 'bean sprout', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1476005484258-bd38fa5bc155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc1MTczfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BEET: {
            name: 'beet', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1503623758111-863eb2abd7a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc1MTEzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BELLA_MUSHROOM: {
            name: 'bella mushroom', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc1Njc2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BERRY: {
            name: 'berry', plural: 'berries', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1556048029-9c5edf1aa695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc0OTMwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BLACKBERRY: {
            name: 'blackberry', plural: 'blackberries', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1567870335471-1129836babcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc0OTc4fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BLUEBERRY: {
            name: 'blueberry', plural: 'blueberries', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1597774681009-f8679cf72348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc0OTIxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BROCCOLI: {
            name: 'broccoli', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://plus.unsplash.com/premium_photo-1702403157830-9df749dc6c1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4NTQ5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BROWN_MUSHROOM: { name: 'brown mushroom', category: INGREDIENT_CATEGORY.PRODUCE },
        BRUSSELS_SPROUT: {
            name: 'brussels sprout', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1438118907704-7718ee9a191a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc4OTg5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BUTTERNUT_SQUASH: { name: 'butternut squash', category: INGREDIENT_CATEGORY.PRODUCE },
        CABBAGE: {
            name: 'cabbage', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1591586007768-40725cc562a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc4OTE2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CANTALOUPE: {
            name: 'cantaloupe', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://plus.unsplash.com/premium_photo-1705932430293-a1d21fab094a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc5MDY3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CAPSICUM: { name: 'capsicum', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4MjkxfA&ixlib=rb-4.0.3&q=80&w=400" },
        CARROT: {
            name: 'carrot', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc0NzE0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CARROT_CHIP: {
            name: 'carrot chip', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc0NzE0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CARROT_MATCHSTICK: {
            name: 'carrot matchstick', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc0NzE0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CASSAVA: { name: 'cassava', category: INGREDIENT_CATEGORY.PRODUCE },
        CAULIFLOWER: {
            name: 'cauliflower', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc0Nzk2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CAESAR_SALAD_KIT: { name: 'caesar salad kit', category: INGREDIENT_CATEGORY.PRODUCE },
        CHERRY_TOMATO: { name: 'cherry tomato', plural: 'cherry tomatoes', category: INGREDIENT_CATEGORY.PRODUCE },
        CHERRY: {
            name: 'cherry', plural: 'cherries', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1560772336-0a9953caf5b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc0ODUwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CELERY: {
            name: 'celery', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1580391564590-aeca65c5e2d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3OTczfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CHILI_PEPPER: { name: 'chili pepper', category: INGREDIENT_CATEGORY.PRODUCE },
        CHINESE_BROCCOLI: { name: 'Chinese broccoli', category: INGREDIENT_CATEGORY.PRODUCE },
        CHINESE_CABBAGE: { name: 'Chinese cabbage', category: INGREDIENT_CATEGORY.PRODUCE },
        CHINESE_MUSTARD_GREEN: { name: 'Chinese mustard green', category: INGREDIENT_CATEGORY.PRODUCE },
        CHIPOTLE_SALAD_KITS: { name: 'chipotle salad kits', category: INGREDIENT_CATEGORY.PRODUCE },
        CHIVE: { name: 'chives', category: INGREDIENT_CATEGORY.PRODUCE },
        CHOY_SUM: { name: 'choy sum', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1515192558558-17a7c4904ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc0NjcwfA&ixlib=rb-4.0.3&q=80&w=400" },
        CHRYSANTHEMUM_LEAVES: { name: 'chrysanthemum leaves', category: INGREDIENT_CATEGORY.PRODUCE },
        CILANTRO: {
            name: 'cilantro', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1601493700603-43461216807a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc4NzEwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CLEMENTINE: {
            name: 'clementine', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1482012792084-a0c3725f289f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc5MjE4fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        COCONUT: {
            name: 'coconut', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1588413335653-34b770bca7c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3ODY0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        COLLARD_GREEN: { name: 'collard green', category: INGREDIENT_CATEGORY.PRODUCE },
        CORIANDER: { name: 'coriander', category: INGREDIENT_CATEGORY.PRODUCE },
        CORN: {
            name: 'corn', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1634467524884-897d0af5e104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTczMDA0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CORN_ON_THE_COB: {
            name: 'corn on the cob', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1634467524884-897d0af5e104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTczMDA0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CUCUMBER: {
            name: 'cucumber', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1589621316382-008455b857cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc5NzQyfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        DAIKON: { name: 'daikon', category: INGREDIENT_CATEGORY.PRODUCE },
        DATE: {
            name: 'date', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1614061811858-dde54a522f5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc4MTkyfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        DILL: { name: 'dill', category: INGREDIENT_CATEGORY.PRODUCE },
        DRAGON_FRUIT: {
            name: 'dragon fruit', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1705501720577-4fe7bba7f85b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc5MTIzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        DURIAN: {
            name: 'durian', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1562486683-67d4d5886f99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4NDg0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        EDAMAME: {
            name: 'edamame', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1649257171206-37625b1f3b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc5OTAyfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        EGGPLANT: {
            name: 'eggplant', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1604321272882-07c73743be32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc5OTk1fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        FRENCH_GREEN_BEAN: { name: 'french green beans', category: INGREDIENT_CATEGORY.PRODUCE },
        FRESH_ROSEMARY: {
            name: 'fresh rosemary', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1582745741856-1a5d68158ba3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTgwMDc3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        FRESH_SAGE: { name: 'fresh sage', category: INGREDIENT_CATEGORY.PRODUCE },
        FRESH_THYME: { name: 'fresh thyme', category: INGREDIENT_CATEGORY.PRODUCE },
        FUJI_APPLE: { name: 'fuji apples', category: INGREDIENT_CATEGORY.PRODUCE },
        GARLIC: {
            name: 'garlic', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1625229466998-42ee9c597290?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4Mzk0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        GAI_CHOY: { name: 'gai choy', category: INGREDIENT_CATEGORY.PRODUCE },
        GALA_APPLE: { name: 'gala apple', category: INGREDIENT_CATEGORY.PRODUCE },
        GARLIC_CHIVE: { name: 'garlic chive', category: INGREDIENT_CATEGORY.PRODUCE },
        GINGER: {
            name: 'ginger', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1630623093145-f606591c2546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY2MjYxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        GRANNY_SMITH_APPLE: {
            name: 'granny smith apple', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://plus.unsplash.com/premium_photo-1674262321087-bfcd8135fdc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4MTIyfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        GRAPEFRUIT: { name: 'grapefruit', category: INGREDIENT_CATEGORY.PRODUCE },
        GRAPE_TOMATO: { name: 'grape tomato', plural: 'grape tomatoes', category: INGREDIENT_CATEGORY.PRODUCE },
        GRAPE: { name: 'grape', category: INGREDIENT_CATEGORY.PRODUCE },
        GREEN_BEAN: { name: 'green bean', category: INGREDIENT_CATEGORY.PRODUCE },
        GREEN_BELL_PEPPER: {
            name: 'green bell pepper', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4MjkxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        GREEN_CABBAGE: { name: 'green cabbage', category: INGREDIENT_CATEGORY.PRODUCE },
        GREEN_ONION: { name: 'green onion', category: INGREDIENT_CATEGORY.PRODUCE },
        GREEN_PEA: {
            name: 'green pea', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1560705185-d0291220a442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc2MDQzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        GUAJILLO_CHILI_PEPPER: { name: 'guajillo chili pepper', category: INGREDIENT_CATEGORY.PRODUCE },
        GUAVA: { name: 'guava', category: INGREDIENT_CATEGORY.PRODUCE },
        HASS_AVOCADO: { name: 'hass avocado', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1601039641847-7857b994d704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4NTE2fA&ixlib=rb-4.0.3&q=80&w=400" },
        HONEY_CRISP_APPLE: { name: 'honey crisp apple', category: INGREDIENT_CATEGORY.PRODUCE },
        HONEYDEW: { name: 'honeydew', category: INGREDIENT_CATEGORY.PRODUCE },
        HONEY_NUT_SQUASH: { name: 'honey nut squash', category: INGREDIENT_CATEGORY.PRODUCE },
        ICEBERG_LETTUCE: {
            name: 'iceberg lettuce', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1591193144634-a2bf060fdb36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc2Mjg5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        IDAHO_POTATO: {
            name: 'idaho potato', plural: 'idaho potatoes', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcyMzgwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        JALAPENO_PEPPER: { name: 'jalapeno pepper', category: INGREDIENT_CATEGORY.PRODUCE },
        JICAMA: { name: 'jicama', category: INGREDIENT_CATEGORY.PRODUCE },
        KALE: {
            name: 'kale', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1624300477446-d379e923eca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTczNTQ1fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        KAFFIR_LIME_LEAF: { name: 'kaffir lime leaf', plural: 'kaffir lime leaves', category: INGREDIENT_CATEGORY.PRODUCE },
        KEY_LIME: { name: 'key lime', category: INGREDIENT_CATEGORY.PRODUCE },
        KEY_LIME_JUICE: { name: 'key lime juice', plural: 'key lime juice', category: INGREDIENT_CATEGORY.PRODUCE },
        KIWI: {
            name: 'kiwi', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1616684000067-36952fde56ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc1Mjg2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        KUMQUAT: { name: 'kumquat', category: INGREDIENT_CATEGORY.PRODUCE },
        LEEK: { name: 'leek', category: INGREDIENT_CATEGORY.PRODUCE },
        LEMON: {
            name: 'lemon', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1590502593747-42a996133562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcyMDg1fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        LEMON_BASIL: { name: 'lemon basil', category: INGREDIENT_CATEGORY.PRODUCE },
        LEMONGRASS: { name: 'lemongrass', category: INGREDIENT_CATEGORY.PRODUCE },
        LEMON_JUICE: {
            name: 'lemon juice', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1590502593747-42a996133562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcyMDg1fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        LEMON_ZEST: {
            name: 'lemon zest', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1590502593747-42a996133562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcyMDg1fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        LETTUCE: {
            name: 'lettuce', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1591193144634-a2bf060fdb36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc2Mjg5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        LIME: {
            name: 'lime', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1578855691621-8a08ea00d1fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc1NDYwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        LIME_JUICE: {
            name: 'lime juice', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1578855691621-8a08ea00d1fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc1NDYwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        LOTUS_ROOT: { name: 'lotus root', category: INGREDIENT_CATEGORY.PRODUCE },
        MALANGA: { name: 'malanga', category: INGREDIENT_CATEGORY.PRODUCE },
        MANDARIN_ORANGE: { name: 'mandarin orange', category: INGREDIENT_CATEGORY.PRODUCE },
        MANGO: {
            name: 'mango', plural: 'mangoes', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcyMDg5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        MINI_CUCUMBER: { name: 'mini cucumber', category: INGREDIENT_CATEGORY.PRODUCE },
        MINT_LEAF: {
            name: 'mint leaf', plural: 'mint leaves', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1588908933351-eeb8cd4c4521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc1NTQyfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        MUNG_BEAN_SPROUT: {
            name: 'mung bean sprout', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1476005484258-bd38fa5bc155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc1MTczfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        MUSHROOM: {
            name: 'mushroom', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc1Njc2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        NAPA_CABBAGE: { name: 'napa cabbage', category: INGREDIENT_CATEGORY.PRODUCE },
        NAVEL_ORANGE: { name: 'navel orange', category: INGREDIENT_CATEGORY.PRODUCE },
        NECTARINE: { name: 'nectarine', category: INGREDIENT_CATEGORY.PRODUCE },
        OKRA: { name: 'okra', category: INGREDIENT_CATEGORY.PRODUCE },
        ONG_CHOY: { name: 'ong choy', category: INGREDIENT_CATEGORY.PRODUCE },
        ORANGE_BELL_PEPPER: {
            name: 'orange bell pepper', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4MjkxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        ORANGE: {
            name: 'orange', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4MjMyfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        ORANGE_ZEST: { name: 'orange zest', category: INGREDIENT_CATEGORY.PRODUCE },
        PASSION_FRUIT: { name: 'passion fruit', category: INGREDIENT_CATEGORY.PRODUCE },
        PEACH: {
            name: 'peach', plural: 'peaches', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1639588473831-dd9d014646ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcyMTU2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        PEAR: {
            name: 'pear', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1572929773424-93549dced6d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcyODY5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        PERSIMMON: { name: 'persimmon', category: INGREDIENT_CATEGORY.PRODUCE },
        PINEAPPLE: {
            name: 'pineapple', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://plus.unsplash.com/premium_photo-1724255995351-9aa5b0e7cdad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcyMzQxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        PINK_LADY_APPLE: { name: 'pink lady apple', category: INGREDIENT_CATEGORY.PRODUCE },
        PLUM: { name: 'plum', category: INGREDIENT_CATEGORY.PRODUCE },
        POTATO: {
            name: 'potato', plural: 'potatoes', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcyMzgwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        PUMPKIN: {
            name: 'pumpkin', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1602457471441-e7099c989338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDYwNzA2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        RADISH: { name: 'radish', category: INGREDIENT_CATEGORY.PRODUCE },
        RAMBUTAN: {
            name: 'rambutan', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1704079617783-3a65c68b5d8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDYwNzY1fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        RASPBERRY: {
            name: 'raspberry', plural: 'raspberries', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcxNjk4fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        RED_BELL_PEPPER: {
            name: 'red bell pepper', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4MjkxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        RED_CABBAGE: {
            name: 'red cabbage', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1591193144634-a2bf060fdb36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc2Mjg5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        RED_CHILI: {
            name: 'red chili', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1583506522440-b2639ef4c1d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU3OTUxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        RED_ONION: {
            name: 'red onion', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1593629718894-e9a8f9f65d01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTU0ODEzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        RED_POTATO: { name: 'red potato', plural: 'red potatoes', category: INGREDIENT_CATEGORY.PRODUCE },
        ROMA_TOMATO: {
            name: 'roma tomato', plural: 'roma tomatoes', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://plus.unsplash.com/premium_photo-1675366298841-4451b04055fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTU5MzU4fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        ROMAINE_LETTUCE: { name: 'romaine lettuce', category: INGREDIENT_CATEGORY.PRODUCE },
        RUSSET_POTATO: {
            name: 'russet potato', plural: 'russet potatoes', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1675501344642-92d35d90fe51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTcyNTQ5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SEEDLESS_GRAPE: { name: 'seedless grape', category: INGREDIENT_CATEGORY.PRODUCE },
        SEEDLESS_WATERMELON: {
            name: 'seedless watermelon', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1621961048737-a9993789e1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc1ODk3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SERRANO_PEPPER: { name: 'serrano pepper', category: INGREDIENT_CATEGORY.PRODUCE },
        SHALLOT: { name: 'shallot', category: INGREDIENT_CATEGORY.PRODUCE },
        SHIITAKE_MUSHROOM: { name: 'shiitake mushroom', category: INGREDIENT_CATEGORY.PRODUCE },
        SHREDDED_LETTUCE: { name: 'shredded lettuce', category: INGREDIENT_CATEGORY.PRODUCE },
        SLICER_TOMATO: { name: 'slicer tomato', plural: 'slicer tomatoes', category: INGREDIENT_CATEGORY.PRODUCE },
        SNOW_PEA: { name: 'snow pea', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://plus.unsplash.com/premium_photo-1663844169467-ddb73a03afdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc2MDc0fA&ixlib=rb-4.0.3&q=80&w=400" },
        SOUTHWEST_SALAD_KITS: { name: 'southwest salad kits', category: INGREDIENT_CATEGORY.PRODUCE },
        SPINACH: {
            name: 'spinach', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://plus.unsplash.com/premium_photo-1701699257548-8261a687236f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc5MzY5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SQUASH: { name: 'squash', category: INGREDIENT_CATEGORY.PRODUCE },
        STAR_FRUIT: { name: 'star fruit', category: INGREDIENT_CATEGORY.PRODUCE },
        STRAWBERRY: {
            name: 'strawberry', plural: 'strawberries', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc4Njg1fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SUMMER_SQUASH: { name: 'summer squash', category: INGREDIENT_CATEGORY.PRODUCE },
        SWEET_ONION: { name: 'sweet onion', category: INGREDIENT_CATEGORY.PRODUCE },
        SWEET_POTATO: { name: 'sweet potato', plural: 'sweet potatoes', category: INGREDIENT_CATEGORY.PRODUCE },
        SWEETCORN: {
            name: 'sweetcorn', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1634467524884-897d0af5e104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTczMDA0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        TANGERINE: {
            name: 'tangerine', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1605723937077-66a33776015c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc5NTYxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        TARO: { name: 'taro', category: INGREDIENT_CATEGORY.PRODUCE },
        THAI_BASIL: { name: 'thai basil', category: INGREDIENT_CATEGORY.PRODUCE },
        THAI_CHILI_PEPPER: { name: 'thai chili pepper', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1526346698789-22fd84314424?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDYwODAwfA&ixlib=rb-4.0.3&q=80&w=400" },
        TOFU: {
            name: 'tofu', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://plus.unsplash.com/premium_photo-1664648005379-0a49b3462607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc5NjUzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        VINE_TOMATO: {
            name: 'vine tomato', plural: 'vine tomatoes', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1524593166156-312f362cada0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTU5MjkyfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        WATER_SPINACH: { name: 'water spinach', category: INGREDIENT_CATEGORY.PRODUCE },
        WATERMELON: {
            name: 'watermelon', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc1ODMwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        WHITE_MUSHROOM: {
            name: 'white mushroom', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://plus.unsplash.com/premium_photo-1658506625039-a58a6eb4a0b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc1NzgxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        WHITE_ONION: { name: 'white onion', category: INGREDIENT_CATEGORY.PRODUCE },
        YAM: {
            name: 'yam', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1584699006710-3ad3b82fce7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc1NDAwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        YELLOW_BELL_PEPPER: {
            name: 'yellow bell pepper', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY4MjkxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        YELLOW_ONION: {
            name: 'yellow onion', category: INGREDIENT_CATEGORY.PRODUCE, img: "https://plus.unsplash.com/premium_photo-1668076517573-fa01307d87ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTU4ODcxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        YELLOW_SQUASH: { name: 'yellow squash', category: INGREDIENT_CATEGORY.PRODUCE },
        YUKON_GOLD_POTATO: { name: 'yukon gold potato', plural: 'yukon gold potatoes', category: INGREDIENT_CATEGORY.PRODUCE },
        ZUCCHINI: { name: 'zucchini', category: INGREDIENT_CATEGORY.PRODUCE },
    },
    SEAFOOD: {
        BEER_BATTERED_FISH: { name: 'beer battered fish', category: INGREDIENT_CATEGORY.SEAFOOD },
        CALAMARI: { name: 'calamari', category: INGREDIENT_CATEGORY.SEAFOOD },
        COD_FISH: { name: 'cod fish', category: INGREDIENT_CATEGORY.SEAFOOD },
        CRAB: { name: 'crab', category: INGREDIENT_CATEGORY.SEAFOOD },
        CRAB_CAKES: { name: 'crab cakes', category: INGREDIENT_CATEGORY.SEAFOOD },
        CRAWFISH: { name: 'crawfish', category: INGREDIENT_CATEGORY.SEAFOOD },
        FISH: { name: 'fish', category: INGREDIENT_CATEGORY.SEAFOOD },
        FISH_STICKS: { name: 'fish sticks', category: INGREDIENT_CATEGORY.SEAFOOD },
        FLOUNDER: { name: 'flounder', category: INGREDIENT_CATEGORY.SEAFOOD },
        IMITATION_CRAB: { name: 'imitation crab', category: INGREDIENT_CATEGORY.SEAFOOD },
        LARGE_SHRIMP: { name: 'large shrimp', category: INGREDIENT_CATEGORY.SEAFOOD },
        LOBSTER: { name: 'lobster', category: INGREDIENT_CATEGORY.SEAFOOD },
        MAHI_MAHI: { name: 'mahi mahi', category: INGREDIENT_CATEGORY.SEAFOOD },
        MUSSELS: { name: 'mussels', category: INGREDIENT_CATEGORY.SEAFOOD },
        OCTOPUS: { name: 'octopus', category: INGREDIENT_CATEGORY.SEAFOOD },
        SALMON_FISH: { name: 'salmon fish', category: INGREDIENT_CATEGORY.SEAFOOD },
        SHRIMP: { name: 'shrimp', category: INGREDIENT_CATEGORY.SEAFOOD },
        SQUID: { name: 'squid', category: INGREDIENT_CATEGORY.SEAFOOD },
        SWAI_FISH: { name: 'swai fish', category: INGREDIENT_CATEGORY.SEAFOOD },
        TEMPURA_SHRIMP: { name: 'tempura shrimp', category: INGREDIENT_CATEGORY.SEAFOOD },
        TILAPIA_FISH: { name: 'tilapia fish', category: INGREDIENT_CATEGORY.SEAFOOD },
        TUNA_FISH: { name: 'tuna fish', category: INGREDIENT_CATEGORY.SEAFOOD },
        WHITING_FILLET: { name: 'whiting fillet', category: INGREDIENT_CATEGORY.SEAFOOD },
    },
    SNACKS: {
        AIRHEADS: { name: 'airheads', category: INGREDIENT_CATEGORY.SNACKS },
        ALBANESE: { name: 'albanese', category: INGREDIENT_CATEGORY.SNACKS },
        ALMOND_JOY: { name: 'almond joy', category: INGREDIENT_CATEGORY.SNACKS },
        ANDY_CAPPS_HOT_FRIES: { name: 'andy capp\'s hot fries', category: INGREDIENT_CATEGORY.SNACKS },
        APPLE_STRAWS: { name: 'apple straws', category: INGREDIENT_CATEGORY.SNACKS },
        BARNUMS_ANIMAL_CRACKERS: { name: 'barnum\'s animal crackers', category: INGREDIENT_CATEGORY.SNACKS },
        BAKED_LAYS_CHIPS: { name: 'baked lays chips', category: INGREDIENT_CATEGORY.SNACKS },
        BARBECUE_CHIPS: { name: 'barbecue chips', category: INGREDIENT_CATEGORY.SNACKS },
        BAZOOKA_GUM: { name: 'bazooka gum', category: INGREDIENT_CATEGORY.SNACKS },
        BEEF_JERKY: { name: 'beef jerky', category: INGREDIENT_CATEGORY.SNACKS },
        BISCOFF_COOKIES: { name: 'biscoff cookies', category: INGREDIENT_CATEGORY.SNACKS },
        BOTTLE_CAPS: { name: 'bottle caps', category: INGREDIENT_CATEGORY.SNACKS },
        BRETON_CRACKERS: { name: 'breton crackers', category: INGREDIENT_CATEGORY.SNACKS },
        BRUSSELS_COOKIES: { name: 'brussels cookies', category: INGREDIENT_CATEGORY.SNACKS },
        BUBBALICIOUS: { name: 'bubbalicious', category: INGREDIENT_CATEGORY.SNACKS },
        BUTTER_POPCORN: { name: 'butter popcorn', category: INGREDIENT_CATEGORY.SNACKS },
        BUTTERFINGERS: { name: 'butterfingers', category: INGREDIENT_CATEGORY.SNACKS },
        CADBURY_EGGS: { name: 'cadbury eggs', category: INGREDIENT_CATEGORY.SNACKS },
        CANDY_CANES: { name: 'candy canes', category: INGREDIENT_CATEGORY.SNACKS },
        CANDY_CORN: { name: 'candy corn', category: INGREDIENT_CATEGORY.SNACKS },
        CAPE_COD_POTATO_CHIPS: { name: 'cape cod potato chips', category: INGREDIENT_CATEGORY.SNACKS },
        CHARLESTON_CHEW: { name: 'charleston chew', category: INGREDIENT_CATEGORY.SNACKS },
        CHEDDAR_BUNNIES_CRACKERS: { name: 'cheddar bunnies crackers', category: INGREDIENT_CATEGORY.SNACKS },
        CHEDDAR_SOUR_CREAM_CHIPS: { name: 'cheddar sour cream chips', category: INGREDIENT_CATEGORY.SNACKS },
        CHEESE_ITS: { name: 'cheese its', category: INGREDIENT_CATEGORY.SNACKS },
        CHEESE_NIPS: { name: 'cheese nips', category: INGREDIENT_CATEGORY.SNACKS },
        CHEESE_PUFFS: { name: 'cheese puffs', category: INGREDIENT_CATEGORY.SNACKS },
        CHEETOS: { name: 'cheetos', category: INGREDIENT_CATEGORY.SNACKS },
        CHEX_MIX: { name: 'chex mix', category: INGREDIENT_CATEGORY.SNACKS },
        CHICHARRONES: { name: 'chicharrones', category: INGREDIENT_CATEGORY.SNACKS },
        CHICKEN_IN_A_BISKIT: { name: 'chicken in a biskit', category: INGREDIENT_CATEGORY.SNACKS },
        CHICLES_GUM: { name: 'chicles gum', category: INGREDIENT_CATEGORY.SNACKS },
        CHILI_CHEESE_FRITOS: { name: 'chili cheese fritos', category: INGREDIENT_CATEGORY.SNACKS },
        CHIP_AHOY_COOKIES: { name: 'chip ahoy cookies', category: INGREDIENT_CATEGORY.SNACKS },
        CHOCOLATE_COVERED_PRETZELS: { name: 'chocolate covered pretzels', category: INGREDIENT_CATEGORY.SNACKS },
        CHOCOLATE_INSTANT_PUDDING_MIX: { name: 'chocolate instant pudding mix', category: INGREDIENT_CATEGORY.SNACKS },
        CHOCOLATE_PUDDING_CUPS: { name: 'chocolate pudding cups', category: INGREDIENT_CATEGORY.SNACKS },
        CLARK: { name: 'clark', category: INGREDIENT_CATEGORY.SNACKS },
        CLUB_CRACKERS: { name: 'club crackers', category: INGREDIENT_CATEGORY.SNACKS },
        COOKIES: { name: 'cookies', category: INGREDIENT_CATEGORY.SNACKS },
        COOL_RANCH_DORITOS: { name: 'cool ranch doritos', category: INGREDIENT_CATEGORY.SNACKS },
        CRACKERS: { name: 'crackers', category: INGREDIENT_CATEGORY.SNACKS },
        CRAISINS: { name: 'craisins', category: INGREDIENT_CATEGORY.SNACKS },
        DONUTS: { name: 'donuts', category: INGREDIENT_CATEGORY.SNACKS },
        DORITOS: { name: 'doritos', category: INGREDIENT_CATEGORY.SNACKS },
        DOTS: { name: 'dots', category: INGREDIENT_CATEGORY.SNACKS },
        DOUGHNUTS: { name: 'doughnuts', category: INGREDIENT_CATEGORY.SNACKS },
        E_L_FUDGE_COOKIES: { name: 'e.l. fudge cookies', category: INGREDIENT_CATEGORY.SNACKS },
        ENTENMANNS_COOKIES: { name: 'entenmann\'s cookies', category: INGREDIENT_CATEGORY.SNACKS },
        EXTRA_GUM: { name: 'extra gum', category: INGREDIENT_CATEGORY.SNACKS },
        FAMOUS_AMOS_COOKIES: { name: 'famous amos cookies', category: INGREDIENT_CATEGORY.SNACKS },
        FERRERO_ROCHER: { name: 'ferrero rocher', category: INGREDIENT_CATEGORY.SNACKS },
        FIFTH_AVENUE: { name: '5th avenue', category: INGREDIENT_CATEGORY.SNACKS },
        FIG_NEWTONS: { name: 'fig newtons', category: INGREDIENT_CATEGORY.SNACKS },
        FIVE_GUM: { name: '5 gum', category: INGREDIENT_CATEGORY.SNACKS },
        FLAMIN_HOT_CHEETOS: { name: 'flamin hot cheetos', category: INGREDIENT_CATEGORY.SNACKS },
        FRENCH_ONIONS_SUN_CHIPS: { name: 'french onions sun chips', category: INGREDIENT_CATEGORY.SNACKS },
        FRUIT_LEATHER: { name: 'fruit leather', category: INGREDIENT_CATEGORY.SNACKS },
        FRUIT_ROLL_UP: { name: 'fruit roll up', category: INGREDIENT_CATEGORY.SNACKS },
        FRUIT_SNACKS: { name: 'fruit snacks', category: INGREDIENT_CATEGORY.SNACKS },
        FRUIT_STRIPS: { name: 'fruit strips', category: INGREDIENT_CATEGORY.SNACKS },
        FRITOS_CHIPS: { name: 'fritos chips', category: INGREDIENT_CATEGORY.SNACKS },
        FUDGE_STRIPES_COOKIES: { name: 'fudge stripes cookies', category: INGREDIENT_CATEGORY.SNACKS },
        FUNYONS: { name: 'funyons', category: INGREDIENT_CATEGORY.SNACKS },
        GARDEN_SALSA_SUN_CHIPS: { name: 'garden salsa sun chips', category: INGREDIENT_CATEGORY.SNACKS },
        GLUTEN_FREE_OREO: { name: 'gluten free oreo', category: INGREDIENT_CATEGORY.SNACKS },
        GOLDFISH_CRACKERS: { name: 'goldfish crackers', category: INGREDIENT_CATEGORY.SNACKS },
        GRANDMAS_CHOCOLATE_CHIP_COOKIES: { name: 'grandma\'s chocolate chip cookies', category: INGREDIENT_CATEGORY.SNACKS },
        GRANDMAS_OATMEAL_RAISINS_COOKIES: { name: 'grandma\'s oatmeal raisins cookies', category: INGREDIENT_CATEGORY.SNACKS },
        GRAHAM_CRACKER: { name: 'graham cracker', category: INGREDIENT_CATEGORY.SNACKS },
        GRANOLA_BARS: { name: 'granola bars', category: INGREDIENT_CATEGORY.SNACKS },
        GRASSHOPPER_COOKIES: { name: 'grasshopper cookies', category: INGREDIENT_CATEGORY.SNACKS },
        GUM: { name: 'gum', category: INGREDIENT_CATEGORY.SNACKS },
        GUMMY_BEARS: { name: 'gummy bears', category: INGREDIENT_CATEGORY.SNACKS },
        GUMMY_WORMS: { name: 'gummy worms', category: INGREDIENT_CATEGORY.SNACKS },
        GUSHERS: { name: 'gushers', category: INGREDIENT_CATEGORY.SNACKS },
        HARIBO_CANDY: { name: 'haribo candy', category: INGREDIENT_CATEGORY.SNACKS },
        HARVEST_CHEDDAR_SUN_CHIPS: { name: 'harvest cheddar sun chips', category: INGREDIENT_CATEGORY.SNACKS },
        HARVEST_SNAPS: { name: 'harvest snaps', category: INGREDIENT_CATEGORY.SNACKS },
        HELLO_PANDA: { name: 'hello panda', category: INGREDIENT_CATEGORY.SNACKS },
        HERSHEY_CHOCOLATE_BAR: {
            name: 'hershey chocolate bar', category: INGREDIENT_CATEGORY.SNACKS, img: "https://images.unsplash.com/photo-1610450949065-1f2841536c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY5Njk1fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        HERSHEYS_KISSES: { name: 'Hershey\'s kisses', category: INGREDIENT_CATEGORY.SNACKS },
        HI_CHEW: { name: 'hi-chew', category: INGREDIENT_CATEGORY.SNACKS },
        HONEY_BBY_LAYS: { name: 'honey bbq lay\'s', category: INGREDIENT_CATEGORY.SNACKS },
        HONEY_BBQ_FRITOS: { name: 'honey bbq fritos', category: INGREDIENT_CATEGORY.SNACKS },
        HONEY_MAID_GRAHAM_CRACKERS: { name: 'honey maid graham crackers', category: INGREDIENT_CATEGORY.SNACKS },
        HONEY_MUSTARD_PRETZELS: { name: 'honey mustard pretzels', category: INGREDIENT_CATEGORY.SNACKS },
        HONEY_ROASTED_PEANUTS: {
            name: 'honey roasted peanuts', category: INGREDIENT_CATEGORY.SNACKS, iimg: "https://images.unsplash.com/photo-1549978113-29eb25c8177f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3NzE2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        HOT_TAMALES: { name: 'hot tamales', category: INGREDIENT_CATEGORY.SNACKS },
        HUBBA_BUBBA: { name: 'hubba bubba', category: INGREDIENT_CATEGORY.SNACKS },
        JELLY_BELLY: { name: 'jelly belly', category: INGREDIENT_CATEGORY.SNACKS },
        JOLLY_RANCHERS: { name: 'jolly ranchers', category: INGREDIENT_CATEGORY.SNACKS },
        JUNIOR_MINTS: { name: 'junior mints', category: INGREDIENT_CATEGORY.SNACKS },
        KEEBLER_COOKIES: { name: 'keebler cookies', category: INGREDIENT_CATEGORY.SNACKS },
        KETTLE_COOKED_CHIPS: { name: 'kettle cooked chips', category: INGREDIENT_CATEGORY.SNACKS },
        KETTLE_CORN: { name: 'kettle corn', category: INGREDIENT_CATEGORY.SNACKS },
        KIT_KAT: {
            name: 'kit kat', category: INGREDIENT_CATEGORY.SNACKS, img: "https://images.unsplash.com/photo-1604815891325-0f9c17688328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU4MTEwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        LAFFY_TAFFY: { name: 'laffy taffy', category: INGREDIENT_CATEGORY.SNACKS },
        LAYS_CHIPS: { name: 'lay\'s chips', category: INGREDIENT_CATEGORY.SNACKS },
        LEMON_COOKIES: { name: 'lemon cookies', category: INGREDIENT_CATEGORY.SNACKS },
        LEMON_DROPS: { name: 'lemon drops', category: INGREDIENT_CATEGORY.SNACKS },
        M_AND_M: {
            name: 'm&m', category: INGREDIENT_CATEGORY.SNACKS, img: "https://images.unsplash.com/photo-1534705867302-2a41394d2a3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU3NjczfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        MARS_BARS: { name: 'mars bars', category: INGREDIENT_CATEGORY.SNACKS },
        MARSHMALLOW: { name: 'marshmallow', category: INGREDIENT_CATEGORY.SNACKS },
        MENTOS: { name: 'mentos', category: INGREDIENT_CATEGORY.SNACKS },
        MILANO_COOKIES: { name: 'milano cookies', category: INGREDIENT_CATEGORY.SNACKS },
        MINI_MARSHMALLOWS: { name: 'mini marshmallows', category: INGREDIENT_CATEGORY.SNACKS },
        MISS_VICKIES_CHIPS: { name: 'miss vickies chips', category: INGREDIENT_CATEGORY.SNACKS },
        MONDELEZ_INTERNATIONAL: { name: 'mondelez international', category: INGREDIENT_CATEGORY.SNACKS },
        MULTI_SEED_CRACKERS: { name: 'multi-seed crackers', category: INGREDIENT_CATEGORY.SNACKS },
        NACHO_CHEESE_DORITOS: { name: 'nacho cheese doritos', category: INGREDIENT_CATEGORY.SNACKS },
        NATURE_VALLEY_BARS: { name: 'nature valley bars', category: INGREDIENT_CATEGORY.SNACKS },
        NECCO: { name: 'necco', category: INGREDIENT_CATEGORY.SNACKS },
        NERDS: { name: 'nerds', category: INGREDIENT_CATEGORY.SNACKS },
        NEWTONS_BARS: { name: 'newtons bars', category: INGREDIENT_CATEGORY.SNACKS },
        NILLA_VANILLA_COOKIES: { name: 'nilla vanilla cookies', category: INGREDIENT_CATEGORY.SNACKS },
        NUTTER_BUTTER_COOKIES: { name: 'nutter butter cookies', category: INGREDIENT_CATEGORY.SNACKS },
        NUTTY_BARS: { name: 'nutty bars', category: INGREDIENT_CATEGORY.SNACKS },
        OH_HENRY: { name: 'oh henry', category: INGREDIENT_CATEGORY.SNACKS },
        ONE_HUNDRED_GRAND_BAR: { name: '100 grand bar', category: INGREDIENT_CATEGORY.SNACKS },
        ORBIT_GUM: { name: 'orbit gum', category: INGREDIENT_CATEGORY.SNACKS },
        OREO_COOKIES: { name: 'oreo cookies', category: INGREDIENT_CATEGORY.SNACKS },
        ORIGINAL_PRINGLES: { name: 'original pringles', category: INGREDIENT_CATEGORY.SNACKS },
        ORIGINAL_SUN_CHIPS: { name: 'original sun chips', category: INGREDIENT_CATEGORY.SNACKS },
        PEPPERIDGE_FARM_COOKIES: { name: 'pepperidge farm cookies', category: INGREDIENT_CATEGORY.SNACKS },
        PEPPERIDGE_FARM_CRACKERS: { name: 'pepperidge farm crackers', category: INGREDIENT_CATEGORY.SNACKS },
        PIRATES_BOOTY: { name: 'pirate\'s booty', category: INGREDIENT_CATEGORY.SNACKS },
        PISTACHIOS: {
            name: 'pistachios', category: INGREDIENT_CATEGORY.SNACKS, img: "https://images.unsplash.com/photo-1502825751399-28baa9b81efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU4MDMwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        PITA_CHIPS: { name: 'pita chips', category: INGREDIENT_CATEGORY.SNACKS },
        PLAIN_POTATO_CHIPS: { name: 'plain potato chips', category: INGREDIENT_CATEGORY.SNACKS },
        POP_CHIPS: { name: 'pop chips', category: INGREDIENT_CATEGORY.SNACKS },
        POP_ROCKS: { name: 'pop rocks', category: INGREDIENT_CATEGORY.SNACKS },
        POPCORN: { name: 'popcorn', category: INGREDIENT_CATEGORY.SNACKS },
        POPPABLES: { name: 'poppables', category: INGREDIENT_CATEGORY.SNACKS },
        PORK_RINDS: { name: 'pork rinds', category: INGREDIENT_CATEGORY.SNACKS },
        POTATO_CHIPS: { name: 'potato chips', category: INGREDIENT_CATEGORY.SNACKS },
        PREMIUM_CRACKERS: { name: 'premium crackers', category: INGREDIENT_CATEGORY.SNACKS },
        PRETZELS: { name: 'pretzels', category: INGREDIENT_CATEGORY.SNACKS },
        PRINGLES: { name: 'pringles', category: INGREDIENT_CATEGORY.SNACKS },
        PUDDING: { name: 'pudding', category: INGREDIENT_CATEGORY.SNACKS },
        QUAKER_RICE_CAKES: { name: 'quaker rice cakes', category: INGREDIENT_CATEGORY.SNACKS },
        RAISINS: { name: 'raisins', category: INGREDIENT_CATEGORY.SNACKS },
        RAZZLES: { name: 'razzles', category: INGREDIENT_CATEGORY.SNACKS },
        REDUCED_FAT_WHEAT_THINS: { name: 'reduced fat wheat thins', category: INGREDIENT_CATEGORY.SNACKS },
        REESES_PEANUT_BUTTER_CUPS: { name: 'reese\'s peanut butter cups', category: INGREDIENT_CATEGORY.SNACKS },
        REESES_PIECES: { name: 'reese\'s pieces', category: INGREDIENT_CATEGORY.SNACKS },
        REESES_TAKE_FIVE: { name: 'reese\'s take 5', category: INGREDIENT_CATEGORY.SNACKS },
        RITZ_BITS_CRACKERS: { name: 'ritz bits crackers', category: INGREDIENT_CATEGORY.SNACKS },
        RITZ_CRACKERS: { name: 'ritz crackers', category: INGREDIENT_CATEGORY.SNACKS },
        ROLD_GOLD_PRETZELS: { name: 'rold gold pretzels', category: INGREDIENT_CATEGORY.SNACKS },
        RUFFLES: { name: 'ruffles', category: INGREDIENT_CATEGORY.SNACKS },
        SALT_AND_VINEGAR_CHIPS: { name: 'salt and vinegar chips', category: INGREDIENT_CATEGORY.SNACKS },
        SALTINES: { name: 'saltine crackers', category: INGREDIENT_CATEGORY.SNACKS },
        SANDIES_COOKIES: { name: 'sandies cookies', category: INGREDIENT_CATEGORY.SNACKS },
        SEAWEED: { name: 'seaweed', category: INGREDIENT_CATEGORY.SNACKS },
        SEES_CANDIES: { name: 'see\'s candies', category: INGREDIENT_CATEGORY.SNACKS },
        SNICKERS: { name: 'snickers', category: INGREDIENT_CATEGORY.SNACKS },
        SNYDER_PRETZELS: { name: 'snyder pretzels', category: INGREDIENT_CATEGORY.SNACKS },
        SKITTLES: { name: 'skittles', category: INGREDIENT_CATEGORY.SNACKS },
        SMART_FOOD_POPCORN: { name: 'smart food popcorn', category: INGREDIENT_CATEGORY.SNACKS },
        SMARTIES: { name: 'smarties', category: INGREDIENT_CATEGORY.SNACKS },
        SNO_CAPS: { name: 'sno caps', category: INGREDIENT_CATEGORY.SNACKS },
        SODA_CRACKERS: { name: 'soda crackers', category: INGREDIENT_CATEGORY.SNACKS },
        SOUR_CREAM_AND_ONION_CHIPS: { name: 'sour cream and onion chips', category: INGREDIENT_CATEGORY.SNACKS },
        SOUR_PATCH_KIDS: { name: 'sour patch kids', category: INGREDIENT_CATEGORY.SNACKS },
        SOUR_PEACHES: { name: 'sour peaches', category: INGREDIENT_CATEGORY.SNACKS },
        SPICE_SWEET_CHILI_DORITOS: { name: 'spice sweet chili doritos', category: INGREDIENT_CATEGORY.SNACKS },
        STACYS_PITA_CHIPS: { name: 'stacy\'s pita chips', category: INGREDIENT_CATEGORY.SNACKS },
        STARBURST: { name: 'starburst', category: INGREDIENT_CATEGORY.SNACKS },
        SUGAR_BABIES: { name: 'sugar babies', category: INGREDIENT_CATEGORY.SNACKS },
        SUGAR_DADDY: { name: 'sugar daddy', category: INGREDIENT_CATEGORY.SNACKS },
        SUN_CHIPS: { name: 'sun chips', category: INGREDIENT_CATEGORY.SNACKS },
        SUNFLOWER_SEEDS: { name: 'sunflower seeds', category: INGREDIENT_CATEGORY.SNACKS },
        SWEDISH_FISH: { name: 'swedish fish', category: INGREDIENT_CATEGORY.SNACKS },
        SWEET_SOUTHERN_HEAT_BBQ_LAYS: { name: 'sweet southern heat bbq lay\'s', category: INGREDIENT_CATEGORY.SNACKS },
        SWEET_TARTS: { name: 'sweet tarts', category: INGREDIENT_CATEGORY.SNACKS },
        TAKIS: { name: 'takis', category: INGREDIENT_CATEGORY.SNACKS },
        TAPATIO_DORITOS: { name: 'tapatio doritos', category: INGREDIENT_CATEGORY.SNACKS },
        TERRA_CHIPS: { name: 'terra chips', category: INGREDIENT_CATEGORY.SNACKS },
        THREE_MUSKETEERS: { name: 'three musketeers', category: INGREDIENT_CATEGORY.SNACKS },
        TOMATO_BASIL_WHEAT_THINS: { name: 'tomato basil wheat thins', category: INGREDIENT_CATEGORY.SNACKS },
        TORTILLA_CHIPS: { name: 'tortilla chips', category: INGREDIENT_CATEGORY.SNACKS },
        TOSTITOS: { name: 'tostitos', category: INGREDIENT_CATEGORY.SNACKS },
        TOWNHOUSE_CRACKERS: { name: 'townhouse crackers', category: INGREDIENT_CATEGORY.SNACKS },
        TRISCUIT_CRACKERS: { name: 'triscuit crackers', category: INGREDIENT_CATEGORY.SNACKS },
        TWINKIES: { name: 'twinkies', category: INGREDIENT_CATEGORY.SNACKS },
        TWIX: { name: 'twix', category: INGREDIENT_CATEGORY.SNACKS },
        TWIZZLERS: { name: 'twizzlers', category: INGREDIENT_CATEGORY.SNACKS },
        UTZ_CHIPS: { name: 'utz chips', category: INGREDIENT_CATEGORY.SNACKS },
        VANILLA_COOKIES: { name: 'vanilla cookies', category: INGREDIENT_CATEGORY.SNACKS },
        VANILLA_INSTANT_PUDDING_MIX: { name: 'vanilla instant pudding mix', category: INGREDIENT_CATEGORY.SNACKS },
        VANILLA_PUDDING: { name: 'vanilla pudding', category: INGREDIENT_CATEGORY.SNACKS },
        VEGGIE_STRAWS: { name: 'veggie straws', category: INGREDIENT_CATEGORY.SNACKS },
        WAFER_COOKIES: { name: 'wafer cookies', category: INGREDIENT_CATEGORY.SNACKS },
        WAFERS: { name: 'wafers', category: INGREDIENT_CATEGORY.SNACKS },
        WARHEADS: { name: 'warheads', category: INGREDIENT_CATEGORY.SNACKS },
        WASA_CRACKERS: { name: 'wasa crackers', category: INGREDIENT_CATEGORY.SNACKS },
        WATER_CRACKERS: { name: 'water crackers', category: INGREDIENT_CATEGORY.SNACKS },
        WAVY_CHIPS: { name: 'wavy chips', category: INGREDIENT_CATEGORY.SNACKS },
        WHALE_CRACKERS: { name: 'whale crackers', category: INGREDIENT_CATEGORY.SNACKS },
        WHATCHAMACALLIT: { name: 'whatchamacallit', category: INGREDIENT_CATEGORY.SNACKS },
        WHEAT_THINS: { name: 'wheat thins', category: INGREDIENT_CATEGORY.SNACKS },
        WHITE_CHEDDAR_CHEEZE_IT: { name: 'white cheddar cheeze it', category: INGREDIENT_CATEGORY.SNACKS },
        WHITE_CHEDDAR_POPCORN: { name: 'white cheddar popcorn', category: INGREDIENT_CATEGORY.SNACKS },
        WRIGLEY_GUM: { name: 'wrigley gum', category: INGREDIENT_CATEGORY.SNACKS },
        ZEBRA_COOKIES: { name: 'zebra cookies', category: INGREDIENT_CATEGORY.SNACKS },
    },
    // a bunch of chocolate candy bars
    // "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU3NDM2fA&ixlib=rb-4.0.3&q=80&w=400"
    SPICES: {
        ALLSPICE: { name: 'allspice', category: INGREDIENT_CATEGORY.SPICES },
        BASIL: {
            name: 'basil', category: INGREDIENT_CATEGORY.SPICES, img: "https://plus.unsplash.com/premium_photo-1673264299641-397fa130e4a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTY5OTM5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BAY_LEAF: {
            name: 'bay leaf', plural: 'bay leaves', category: INGREDIENT_CATEGORY.SPICES, img: "https://images.unsplash.com/photo-1634612830627-3d0623108087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU4MjExfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        BLACK_PEPPER: {
            name: 'black pepper', category: INGREDIENT_CATEGORY.SPICES, img: "https://images.unsplash.com/photo-1506085621370-98b475435879?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTYwNDc0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CAJUN_SEASONING: { name: 'cajun seasoning', category: INGREDIENT_CATEGORY.SPICES },
        CAROM_SEEDS: { name: 'carom seeds', category: INGREDIENT_CATEGORY.SPICES },
        CARDAMOM: {
            name: 'cardamom', category: INGREDIENT_CATEGORY.SPICES, img: "https://images.unsplash.com/photo-1541533693007-7ea47d894b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU4MjY3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CARDAMOM_PODS: {
            name: 'cardamom pods', category: INGREDIENT_CATEGORY.SPICES, img: "https://images.unsplash.com/photo-1541533693007-7ea47d894b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU4MjY3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CAYENNE_PEPPER: {
            name: 'cayenne pepper', category: INGREDIENT_CATEGORY.SPICES, img: "https://plus.unsplash.com/premium_photo-1726880501641-c7072313efd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU1NzMyfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CELERY_POWDER: { name: 'celery powder', category: INGREDIENT_CATEGORY.SPICES, img: "https://images.unsplash.com/photo-1580391564590-aeca65c5e2d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc3OTczfA&ixlib=rb-4.0.3&q=80&w=400" },
        CHILI_POWDER: {
            name: 'chili powder', category: INGREDIENT_CATEGORY.SPICES, img: "https://images.unsplash.com/photo-1577563717655-919fc57789b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU4MzkwfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CINNAMON: {
            name: 'cinnamon', category: INGREDIENT_CATEGORY.SPICES, img: "https://images.unsplash.com/photo-1622798337764-259682f03741?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTgwNTE0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CINNAMON_STICK: {
            name: 'cinnamon stick', category: INGREDIENT_CATEGORY.SPICES, img: "https://images.unsplash.com/photo-1622798337764-259682f03741?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTgwNTE0fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CLOVES: {
            name: 'cloves', category: INGREDIENT_CATEGORY.SPICES, img: "https://images.unsplash.com/photo-1623307645550-40d76c6e22ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTgwNTYxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        COARSE_SALT: {
            name: 'coarse salt', category: INGREDIENT_CATEGORY.SPICES, img: "https://plus.unsplash.com/premium_photo-1672349888046-361807de476f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTU5NDk5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CORIANDER_POWDER: { name: 'coriander powder', category: INGREDIENT_CATEGORY.SPICES },
        CREAM_OF_TARTAR: { name: 'cream of tartar', category: INGREDIENT_CATEGORY.SPICES },
        CUMIN: {
            name: 'cumin', category: INGREDIENT_CATEGORY.SPICES, img: "https://plus.unsplash.com/premium_photo-1723867311354-e170658fd619?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU3MTQyfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        CURRY_LEAF: { name: 'curry leaf', plural: 'curry leaves', category: INGREDIENT_CATEGORY.SPICES },
        CURRY_POWDER: {
            name: 'curry powder', category: INGREDIENT_CATEGORY.SPICES, img: "https://images.unsplash.com/photo-1615485500834-bc10199bc727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU4NTQxfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        DASHI: { name: 'dashi', category: INGREDIENT_CATEGORY.SPICES },
        EVERYTHING_BAGEL_SEASONING: { name: 'everything bagel seasoning', category: INGREDIENT_CATEGORY.SPICES },
        FENNEL_SEEDS: {
            name: 'fennel seeds', category: INGREDIENT_CATEGORY.SPICES, img: "https://images.unsplash.com/photo-1587493053604-f943541023aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU4NjE5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        FENUGREEK_LEAVES: { name: 'fenugreek leaves', category: INGREDIENT_CATEGORY.SPICES },
        GARAM_MASALA: { name: 'garam masala', category: INGREDIENT_CATEGORY.SPICES },
        GARLIC_POWDER: { name: 'garlic powder', category: INGREDIENT_CATEGORY.SPICES },
        GARLIC_SALT: { name: 'garlic salt', category: INGREDIENT_CATEGORY.SPICES },
        GROUND_GINGER: { name: 'ground ginger', category: INGREDIENT_CATEGORY.SPICES },
        GROUND_CLOVES: { name: 'ground cloves', category: INGREDIENT_CATEGORY.SPICES },
        GROUND_MUSTARD: { name: 'ground mustard', category: INGREDIENT_CATEGORY.SPICES },
        ITALIAN_SEASONING: { name: 'italian seasoning', category: INGREDIENT_CATEGORY.SPICES },
        KOSHER_SALT: {
            name: 'kosher salt', category: INGREDIENT_CATEGORY.SPICES, img: "https://plus.unsplash.com/premium_photo-1672349888046-361807de476f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTU5NDk5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        LEMON_PEPPER: { name: 'lemon pepper', category: INGREDIENT_CATEGORY.SPICES },
        MASSAMAN_CURRY_PASTE: { name: 'massaman curry paste', category: INGREDIENT_CATEGORY.SPICES },
        MCCORMICK_SEASONING_PACKET: { name: 'McCormick seasoning packet', category: INGREDIENT_CATEGORY.SPICES },
        MUSTARD_SEED: { name: 'mustard seed', category: INGREDIENT_CATEGORY.SPICES },
        NIGELLA_SEED: { name: 'nigella seed', category: INGREDIENT_CATEGORY.SPICES },
        NUTMEG: { name: 'nutmeg', category: INGREDIENT_CATEGORY.SPICES },
        ONION_POWDER: { name: 'onion powder', category: INGREDIENT_CATEGORY.SPICES },
        OREGANO: { name: 'oregano', category: INGREDIENT_CATEGORY.SPICES },
        PAPRIKA: { name: 'paprika', category: INGREDIENT_CATEGORY.SPICES },
        PARSLEY: { name: 'parsley', category: INGREDIENT_CATEGORY.SPICES },
        RANCH_DIP_DRESSING: { name: 'ranch dip dressing', category: INGREDIENT_CATEGORY.SPICES },
        RED_PEPPER_FLAKES: { name: 'red pepper flakes', category: INGREDIENT_CATEGORY.SPICES },
        RED_CHILI_PASTE: { name: 'red chili paste', category: INGREDIENT_CATEGORY.SPICES },
        ROSEMARY: {
            name: 'rosemary', category: INGREDIENT_CATEGORY.SPICES, img: "https://images.unsplash.com/photo-1582745741856-1a5d68158ba3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTgwMDc3fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SAFFRON_THREADS: { name: 'saffron threads', category: INGREDIENT_CATEGORY.SPICES },
        SAGE: {
            name: 'sage', category: INGREDIENT_CATEGORY.SPICES, img: "https://images.unsplash.com/photo-1617314608196-356afaecfe7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTgwMjQ5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SALT: {
            name: 'salt', category: INGREDIENT_CATEGORY.SPICES, img: "https://plus.unsplash.com/premium_photo-1672349888046-361807de476f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTU5NDk5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SEA_SALT: { name: 'sea salt', category: INGREDIENT_CATEGORY.SPICES },
        SESAME_SEEDS: {
            name: 'sesame seeds', category: INGREDIENT_CATEGORY.SPICES, img: "https://images.unsplash.com/photo-1628317321557-68729bee6644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTc5NDk5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SMOKED_PAPRIKA: { name: 'smoked paprika', category: INGREDIENT_CATEGORY.SPICES },
        STAR_ANISE: {
            name: 'star anise', category: INGREDIENT_CATEGORY.SPICES, img: "https://images.unsplash.com/photo-1554345795-1243a276630e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQwOTgwNDMzfA&ixlib=rb-4.0.3&q=80&w=400"
        },
        SWEET_PAPRIKA: { name: 'sweet paprika', category: INGREDIENT_CATEGORY.SPICES },
        TACO_SEASONING: { name: 'taco seasoning', category: INGREDIENT_CATEGORY.SPICES },
        TARRAGON: { name: 'tarragon', category: INGREDIENT_CATEGORY.SPICES },
        THYME: { name: 'thyme', category: INGREDIENT_CATEGORY.SPICES },
        TURMERIC: { name: 'turmeric', category: INGREDIENT_CATEGORY.SPICES },
        VANILLA_BEAN: {
            name: 'vanilla bean', category: INGREDIENT_CATEGORY.SPICES, img: "https://images.unsplash.com/photo-1610487512810-b614ad747572?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU3NTA2fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        WHITE_PEPPER: { name: 'white pepper', category: INGREDIENT_CATEGORY.SPICES },
    },
    SPORTING: {
        BASEBALL: { name: 'baseball', category: INGREDIENT_CATEGORY.SPORTING },
        BASKETBALL: { name: 'basketball', category: INGREDIENT_CATEGORY.SPORTING },
        BICYCLE: { name: 'bicycle', category: INGREDIENT_CATEGORY.SPORTING },
        BIKE_HELMET: { name: 'bike helmet', category: INGREDIENT_CATEGORY.SPORTING },
        BIKE_SEAT_COVER: { name: 'bike seat cover', category: INGREDIENT_CATEGORY.SPORTING },
        DART_BOARD: { name: 'dart board', category: INGREDIENT_CATEGORY.SPORTING },
        ELLIPTICAL: { name: 'elliptical', category: INGREDIENT_CATEGORY.SPORTING },
        FOOTBALL: { name: 'football', category: INGREDIENT_CATEGORY.SPORTING },
        KNEE_PADS: { name: 'knee pads', category: INGREDIENT_CATEGORY.SPORTING },
        LACROSSE_BALL: { name: 'lacrosse ball', category: INGREDIENT_CATEGORY.SPORTING },
        LACROSSE_STICK: { name: 'lacrosse stick', category: INGREDIENT_CATEGORY.SPORTING },
        MOUTH_GUARD: { name: 'mouth guard', category: INGREDIENT_CATEGORY.SPORTING },
        POOL_FLOATIES: { name: 'pool floaties', category: INGREDIENT_CATEGORY.SPORTING },
        POOL_BALLS: { name: 'pool balls', category: INGREDIENT_CATEGORY.SPORTING },
        POOL_STICK: { name: 'pool stick', category: INGREDIENT_CATEGORY.SPORTING },
        POOL_TABLE: { name: 'pool table', category: INGREDIENT_CATEGORY.SPORTING },
        RACKETBALL: { name: 'racketball', category: INGREDIENT_CATEGORY.SPORTING },
        RACKETBALL_RACKET: { name: 'racketball racket', category: INGREDIENT_CATEGORY.SPORTING },
        SOCCER_BALL: { name: 'soccer ball', category: INGREDIENT_CATEGORY.SPORTING },
        STATIONARY_BIKE: { name: 'stationary bike', category: INGREDIENT_CATEGORY.SPORTING },
        TENNIS_BALL: { name: 'tennis ball', category: INGREDIENT_CATEGORY.SPORTING },
        TENNIS_RACKET: { name: 'tennis racket', category: INGREDIENT_CATEGORY.SPORTING },
        TREADMILL: { name: 'treadmill', category: INGREDIENT_CATEGORY.SPORTING },
        VOLLEYBALL: { name: 'volleyball', category: INGREDIENT_CATEGORY.SPORTING },
    },
    TOOLS: {
        ALLEN_WRENCH: { name: 'allen wrench', category: INGREDIENT_CATEGORY.TOOLS },
        BUNGEE_CORDS: { name: 'bungee cords', category: INGREDIENT_CATEGORY.TOOLS },
        CLEAR_TAPE: { name: 'clear tape', category: INGREDIENT_CATEGORY.TOOLS },
        CRESCENT_WRENCH: { name: 'crescent wrench', category: INGREDIENT_CATEGORY.TOOLS },
        DRILL: { name: 'drill', category: INGREDIENT_CATEGORY.TOOLS },
        DUCT_TAPE: { name: 'duct tape', category: INGREDIENT_CATEGORY.TOOLS },
        ELECTRICAL_TAPE: { name: 'electrical tape', category: INGREDIENT_CATEGORY.TOOLS },
        EXTENSION_CORD: { name: 'extension cord', category: INGREDIENT_CATEGORY.TOOLS },
        FLAT_HEAD_SCREWDRIVER: { name: 'flat head screwdriver', category: INGREDIENT_CATEGORY.TOOLS },
        LEVEL: { name: 'level', category: INGREDIENT_CATEGORY.TOOLS },
        NAILS: { name: 'nails', category: INGREDIENT_CATEGORY.TOOLS },
        NUTS_AND_BOLTS: { name: 'nuts and bolts', category: INGREDIENT_CATEGORY.TOOLS },
        PHILLIPS_HEAD_SCREWDRIVER: { name: 'phillips head screwdriver', category: INGREDIENT_CATEGORY.TOOLS },
        PLIERS: { name: 'pliers', category: INGREDIENT_CATEGORY.TOOLS },
        SOCKET_RATCHET: { name: 'socket ratchet', category: INGREDIENT_CATEGORY.TOOLS },
        SCREWDRIVER: { name: 'screwdriver', category: INGREDIENT_CATEGORY.TOOLS },
        SCREWS: { name: 'screws', category: INGREDIENT_CATEGORY.TOOLS },
        TAPE_MEASURE: { name: 'tape measure', category: INGREDIENT_CATEGORY.TOOLS },
        TARPS: { name: 'tarps', category: INGREDIENT_CATEGORY.TOOLS },
    },
    TOYS: {},
};

// pumpkin seeds
// "https://images.unsplash.com/photo-1601368184629-7b5843f19e47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQxMDU4NjQ5fA&ixlib=rb-4.0.3&q=80&w=400"


module.exports = {
    ...INGREDIENTS.BABY,
    ...INGREDIENTS.BAKING,
    ...INGREDIENTS.BEAUTY,
    ...INGREDIENTS.BEVERAGES,
    ...INGREDIENTS.BREAKFAST,
    ...INGREDIENTS.CANNED,
    ...INGREDIENTS.CLOTHING,
    ...INGREDIENTS.CONDIMENTS,
    ...INGREDIENTS.COOKING_SUPPLIES,
    ...INGREDIENTS.DAIRY,
    ...INGREDIENTS.DELI,
    ...INGREDIENTS.FROZEN,
    ...INGREDIENTS.FURNITURE,
    ...INGREDIENTS.GARDEN,
    ...INGREDIENTS.GRAIN,
    ...INGREDIENTS.HEALTH,
    ...INGREDIENTS.HOUSEWARES,
    ...INGREDIENTS.MEAT,
    ...INGREDIENTS.OFFICE,
    ...INGREDIENTS.OILS,
    ...INGREDIENTS.OTHER,
    ...INGREDIENTS.PET,
    ...INGREDIENTS.PRODUCE,
    ...INGREDIENTS.SEAFOOD,
    ...INGREDIENTS.SNACKS,
    ...INGREDIENTS.SPICES,
    ...INGREDIENTS.SPORTING,
    ...INGREDIENTS.TOOLS,
    ...INGREDIENTS.TOYS,
};