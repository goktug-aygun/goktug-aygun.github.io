var idxDict = null;
var occDict = null;
var revDict = null;

var greenArr=[];
var yellowArr=[];

var rowCount = 0;

var currentRow = null;
var rows = null;
var buttons = null;

var main_word = "";

var gameOver=false;
const wordArray = ["abacı", "abadi", "abalı", "abana", "abani", "abaşo", "abaza", "abbas", "abdal", "abdal", "abece", "abhaz", "abide", "abiye", "ablak", "abone", "abosa", "abraş", "abuli", "acaba", "acara", "acele", "acemi", "aceze", "acıca", "acılı", "acıma", "acibe", "acube", "acuze", "açgöz", "açlık", "açmak", "açmaz", "adale", "adalı", "adama", "adana", "adedi", "adese", "adeta", "adına", "adres", "adsal", "adsız", "afaki", "afazi", "afgan", "afife", "afili", "afişe", "afoni", "afsun", "afşar", "afşin", "aftos", "afyon", "agami", "agora", "agraf", "ağcık", "ağılı", "ağlak", "ağmak", "ağnam", "ağraz", "ağyar", "ahali", "ahbap", "ahcar", "ahenk", "ahfat", "ahfeş", "ahize", "ahkam", "ahlaf", "ahlak", "ahlat", "ahlat", "ahmak", "ahraz", "ahşap", "ahval", "aidat", "ajans", "ajite", "akabe", "akait", "akaju", "akala", "akbaş", "akçıl", "akdut", "akemi", "akıcı", "akide", "akkor", "akköy", "akkuş", "akkuş", "aklan", "aklen", "aklık", "akmak", "akman", "akmaz", "akont", "akort", "akpas", "akran", "akrep", "akrep", "aksak", "aksam", "aksan", "akson", "akşam", "akşın", "aktar", "aktaş", "aktif", "aktör", "akvam", "alaca", "alaca", "alaka", "alarm", "alaza", "albay", "albüm", "alçak", "aleni", "alevi", "aleyh", "algın", "alıcı", "alize", "alkan", "alkım", "alkış", "alkil", "alkol", "allah", "allah", "allem", "allık", "almaç", "almak", "alman", "almaş", "almus", "alnaç", "altes", "altık", "altın", "altız", "altlı", "alyan", "alyon", "amade", "ambar", "amber", "amele", "ameli", "amigo", "amorf", "amper", "ampir", "ampul", "amudi", "anaca", "analı", "anane", "ancak", "andaç", "andıç", "andık", "andız", "anele", "anemi", "angıç", "angın", "angut", "anide", "anime", "anjin", "anket", "anlak", "anlam", "anlık", "anmak", "anons", "ansız", "anten", "antet", "antik", "antlı", "antre", "anüri", "anyon", "anzak", "apacı", "apiko", "aplik", "aport", "apoşi", "apotr", "april", "apsis", "aptal", "araba", "arabi", "aracı", "araka", "aralı", "arama", "arami", "arazi", "ardak", "ardıç", "ardıl", "arena", "argaç", "argın", "argıt", "argon", "arıcı", "arıza", "arızi", "arife", "ariya", "ariza", "arkaç", "arkıt", "arkoz", "armut", "armuz", "aroma", "arpçı", "arpej", "arsız", "arsin", "arşın", "arşiv", "artçı", "arter", "artık", "artım", "artın", "artış", "artma", "asabi", "ashap", "asılı", "aside", "asist", "askat", "asker", "asklı", "aslan", "aslan", "aslen", "aslık", "asmak", "aspur", "astar", "astat", "astım", "astik", "asude", "asyön", "aşağı", "aşama", "aşari", "aşevi", "aşıcı", "aşılı", "aşırı", "aşina", "aşkın", "aşlık", "aşmak", "aşure", "atama", "atari", "ataşe", "atfen", "atıcı", "atılı", "atlas", "atlet", "atmak", "atmık", "avane", "avans", "avara", "avare", "avaze", "avdet", "avize", "avlak", "avrat", "avret", "avşar", "avunç", "avurt", "aydın", "aydın", "ayevi", "aygır", "aygıt", "ayıcı", "ayırt", "aylak", "aylık", "aymak", "aymaz", "aynaz", "aynen", "ayraç", "ayran", "ayrıç", "ayrık", "ayrım", "ayrıt", "aysar", "aysız", "ayvan", "ayvaz", "ayyar", "ayyaş", "ayyuk", "azade", "azami", "azeri", "azgın", "azılı", "azize", "azlık", "azmak", "azmak", "azman", "aznif", "azoik", "azvay", "babaç", "bacak", "baççı", "badal", "badas", "badat", "badem", "badıç", "badik", "badya", "bafra", "bagaj", "baget", "bağan", "bağcı", "bağda", "bağıl", "bağım", "bağın", "bağır", "bağış", "bağıt", "bağlı", "bahai", "bahar", "bahçe", "bahçe", "bahir", "bahis", "bahri", "bakaç", "bakam", "bakan", "bakım", "bakır", "bakış", "bakir", "bakla", "bakma", "balar", "balat", "balcı", "baldo", "balet", "balık", "balık", "baliğ", "balkı", "ballı", "balon", "baloz", "balta", "balya", "balya", "bambu", "bamya", "banak", "banal", "banaz", "bando", "banjo", "banka", "banko", "banma", "banyo", "baraj", "barak", "baran", "barba", "barcı", "barça", "barda", "barem", "baret", "barış", "barit", "bariz", "barka", "barok", "baron", "barut", "basak", "basar", "basen", "basık", "basım", "basın", "basış", "basil", "basit", "baskı", "basma", "basso", "bastı", "basur", "basya", "başak", "başak", "başat", "başçı", "başka", "başlı", "başta", "batak", "batar", "batık", "batıl", "batın", "batın", "batış", "batik", "batkı", "batma", "baton", "batur", "bavcı", "bavlı", "bavul", "bayan", "bayat", "bayat", "bayır", "bayma", "bayrı", "bazal", "bazen", "bazik", "bazit", "bebek", "becet", "bedel", "beden", "bedii", "bedik", "bedir", "bedük", "begüm", "beher", "behey", "behre", "bekar", "bekar", "bekas", "bekçi", "bekri", "belce", "belde", "belek", "belen", "belen", "beleş", "belge", "belgi", "beliğ", "belik", "belit", "belki", "belli", "bemol", "bence", "benci", "bende", "benek", "bengi", "beniz", "benli", "berat", "beril", "berri", "besin", "besni", "besni", "beste", "beşer", "beşik", "beşiz", "beşli", "beşme", "beşon", "beşuş", "beter", "betik", "betim", "beton", "beyan", "beyaz", "beyin", "beyit", "beyzi", "bezci", "bezek", "bezen", "bezgi", "bezik", "bezir", "beziş", "bezme", "bezsi", "bıcıl", "bıçak", "bıçık", "bıçkı", "bıdık", "bıkış", "bıkma", "bıyık", "bızır", "biber", "biblo", "bicik", "biçem", "biçim", "biçiş", "biçki", "biçme", "bidar", "bidat", "bidon", "bihuş", "bikes", "bikir", "bilar", "bilek", "bilet", "bilge", "bilgi", "bilim", "bilir", "biliş", "bilme", "bilye", "bindi", "binek", "biner", "bingi", "biniş", "binit", "binme", "biraz", "birci", "birer", "birey", "birim", "birli", "birun", "bişek", "bitap", "bitek", "bitey", "bitik", "bitim", "bitiş", "bitki", "bitli", "bitme", "bitüm", "biyel", "bizar", "bizce", "bizon", "bloke", "bobin", "bocce", "bocuk", "boduç", "bodur", "boğak", "boğaz", "boğma", "boğuk", "boğum", "bohça", "bohem", "boklu", "bolca", "bomba", "bombe", "borak", "boran", "borat", "borda", "bordo", "borik", "borsa", "boruk", "boyar", "boyca", "boylu", "boyna", "boyoz", "boyun", "boyut", "bozca", "bozma", "bozuk", "bozum", "bozuş", "böbür", "böcek", "böğür", "bölen", "bölge", "bölme", "bölük", "bölüm", "bölüş", "bölüt", "bönce", "börek", "böyle", "branş", "bravo", "bronş", "bronz", "bröve", "bucak", "bucak", "buçuk", "budak", "budun", "bugün", "buğra", "buğur", "buğuz", "buhar", "buhur", "buket", "bukle", "bulak", "bulgu", "bulma", "buluş", "bulut", "bunak", "bunca", "bunlu", "bunma", "burak", "burcu", "burgu", "burma", "bursa", "buruk", "burun", "buşon", "butik", "butlu", "buton", "buyma", "buyot", "buzcu", "buzla", "buzlu", "buzul", "bücür", "büğet", "büğlü", "büken", "bükme", "büküç", "bükük", "büküm", "bükün", "büküş", "büluğ", "bünye", "bürgü", "bürük", "bürün", "bütan", "bütçe", "büten", "bütey", "bütün", "büvet", "büyük", "büzgü", "büzme", "büzük", "cacık", "cadde", "cahil", "caize", "calip", "camcı", "camız", "camia", "camit", "camlı", "camsı", "canan", "canik", "canip", "canlı", "carlı", "carta", "casus", "cayış", "cayma", "cazcı", "cazip", "cazlı", "cebel", "cebin", "cebir", "cebri", "cedel", "cedit", "cedre", "cehil", "cehre", "cehri", "ceket", "celal", "celbe", "celep", "celil", "celse", "cemal", "ceman", "cemil", "cemre", "cenah", "cenap", "cenin", "cenup", "cepçi", "cephe", "ceren", "ceset", "cesim", "cesur", "cevap", "cevaz", "cevir", "ceviz", "cevvi", "cevza", "cezai", "cezbe", "cezir", "cezri", "cezve", "cıbıl", "cıcık", "cılız", "cıvık", "cıvma", "cızık", "cibin", "cibre", "cicik", "cicim", "cicoz", "cidal", "cidar", "ciddi", "ciğer", "cihan", "cihar", "cihat", "cihaz", "cihet", "cilve", "cimri", "cinai", "cinas", "cinci", "cinli", "cinsi", "cirim", "cirit", "cisim", "civan", "civar", "cizre", "cizye", "conta", "corum", "coşku", "coşma", "coşum", "coşuş", "cudam", "cukka", "cumba", "cunda", "cunta", "cuşiş", "cübbe", "cücük", "cülus", "cümle", "cünha", "cünun", "cünüp", "cüret", "cüruf", "cürüm", "cüsse", "çabuk", "çadır", "çağla", "çağma", "çağrı", "çakal", "çakar", "çaker", "çakıl", "çakım", "çakın", "çakır", "çakış", "çakma", "çakra", "çalak", "çalap", "çalar", "çalgı", "çalık", "çalım", "çalış", "çalkı", "çalma", "çaltı", "çamaş", "çamat", "çamça", "çamur", "çanak", "çancı", "çandı", "çanlı", "çanta", "çapak", "çapar", "çapla", "çaplı", "çapma", "çapul", "çaput", "çarık", "çarka", "çarpı", "çarşı", "çasar", "çaşıt", "çatak", "çatak", "çatal", "çatık", "çatış", "çatkı", "çatma", "çavlı", "çavma", "çavun", "çavuş", "çayan", "çaycı", "çayır", "çaylı", "çebiç", "çecik", "çeçen", "çedik", "çehre", "çekçe", "çekek", "çekel", "çekem", "çeker", "çekiç", "çekik", "çekim", "çekiş", "çekme", "çekül", "çelek", "çelen", "çelgi", "çelik", "çelim", "çello", "çelme", "çemçe", "çemen", "çemiç", "çemiş", "çenek", "çenet", "çengi", "çepel", "çeper", "çepez", "çepin", "çepni", "çerağ", "çerçi", "çerez", "çerge", "çeşit", "çeşme", "çeşme", "çeşni", "çetin", "çevik", "çevre", "çevri", "çeyiz", "çıban", "çıdam", "çıfıt", "çıfıt", "çığır", "çıkak", "çıkan", "çıkar", "çıkık", "çıkın", "çıkış", "çıkıt", "çıkma", "çıkra", "çıktı", "çınar", "çınar", "çıngı", "çıpır", "çırağ", "çırak", "çırpı", "çıtak", "çıvma", "çıyan", "çiçek", "çifte", "çigan", "çiğde", "çiğil", "çiğin", "çiğit", "çiğli", "çilek", "çilli", "çimek", "çimen", "çimme", "çince", "çinko", "çinli", "çipil", "çiriş", "çiroz", "çisen", "çişik", "çiten", "çitme", "çivit", "çizer", "çizge", "çizgi", "çizik", "çizim", "çiziş", "çizme", "çoban", "çocuk", "çoğul", "çoğun", "çokal", "çokça", "çokçu", "çoklu", "çolak", "çolpa", "çomak", "çomar", "çopra", "çopur", "çorak", "çorap", "çorba", "çorlu", "çorlu", "çorum", "çotra", "çotuk", "çöğme", "çöğür", "çökek", "çökel", "çökme", "çökük", "çöküm", "çöküş", "çömçe", "çömez", "çömme", "çöpçü", "çöplü", "çörek", "çörkü", "çörtü", "çöven", "çözgü", "çözme", "çözük", "çözüm", "çözüş", "çubuk", "çubuk", "çukur", "çulcu", "çulha", "çumra", "çupra", "çuşka", "çuval", "çuvaş", "çükür", "çünkü", "çürük", "dadaş", "daday", "dağar", "dağcı", "dağlı", "dahil", "dahil", "daima", "daimi", "daire", "dakik", "dalak", "dalan", "dalaş", "dalga", "dalgı", "dalış", "dalız", "dallı", "dalma", "dalsı", "dalya", "damak", "damal", "damar", "damat", "damga", "damla", "damlı", "danca", "danış", "daraç", "daraş", "darbe", "darca", "dasit", "datça", "datif", "davar", "davet", "davul", "davya", "dayak", "debbe", "debil", "defin", "defne", "degaj", "değeç", "değer", "değil", "değim", "değin", "değiş", "değme", "deist", "deizm", "dekan", "dekar", "dekor", "delgi", "delik", "delil", "delme", "delta", "demci", "demeç", "demek", "demet", "demin", "demir", "demli", "demre", "denek", "denet", "deney", "denge", "denim", "deniz", "denli", "denme", "denyo", "depar", "derbi", "dergi", "derik", "derin", "derme", "derun", "derya", "desen", "deste", "deşik", "deşme", "detay", "devam", "devce", "devim", "devir", "devre", "devri", "deyim", "deyiş", "dığan", "dılak", "dışık", "dışkı", "dibek", "dicle", "didar", "didim", "didon", "digor", "diğer", "dikçe", "dikeç", "dikel", "diken", "dikey", "dikim", "dikiş", "dikit", "dikiz", "dikme", "dikse", "dikta", "dikte", "dilce", "dilci", "dilek", "dilim", "diliş", "dilli", "dilme", "dilsi", "dimağ", "dinar", "dinar", "dince", "dinci", "dinek", "dinen", "dingi", "dingo", "diniş", "dinli", "dinme", "dipli", "direk", "diren", "direy", "diriğ", "diril", "dirim", "disko", "dişçi", "dişil", "dişli", "ditme", "dival", "divan", "divik", "divit", "diyar", "diyet", "diyez", "diyot", "dizek", "dizel", "dizem", "dizey", "dizge", "dizgi", "dizim", "dizin", "diziş", "dizme", "dobra", "dogma", "doğaç", "doğal", "doğan", "doğma", "doğru", "doğum", "doğuş", "dokuz", "dolak", "dolam", "dolap", "dolar", "dolay", "dolgu", "dolma", "dolum", "doluş", "domur", "domuz", "donam", "donlu", "donma", "donör", "donra", "donuk", "dorse", "doruk", "dorum", "dosya", "doygu", "doyma", "doyum", "doyuş", "dozaj", "dozer", "döger", "dökme", "dökük", "döküm", "döküş", "dölek", "dölüt", "döneç", "dönek", "dönel", "dönem", "döner", "döngü", "dönme", "dönük", "dönüm", "dönüş", "dönüt", "döper", "döşek", "döşem", "döşlü", "döveç", "döviz", "dövme", "dövüş", "draje", "drama", "duacı", "dualı", "dubar", "duble", "dudak", "duhul", "dulda", "duluk", "duman", "dumur", "duraç", "durak", "dural", "durgu", "durma", "duruk", "durum", "duruş", "duşak", "duşlu", "dutçu", "duvak", "duvar", "duyar", "duygu", "duyma", "duyum", "duyuş", "dübel", "dübeş", "düçar", "düden", "düdük", "dügah", "düğme", "düğüm", "düğün", "dümen", "dünit", "dünkü", "dünür", "dünya", "dünya", "dürme", "dürtü", "dürüm", "dürzi", "dürzü", "düşçü", "düşes", "düşeş", "düşey", "düşkü", "düşme", "düşük", "düşün", "düşüş", "düşüt", "düvel", "düven", "düver", "düyek", "düyun", "düzce", "düzce", "düzeç", "düzem", "düzen", "düzey", "düzgü", "düzme", "ebcet", "ebedi", "ebeli", "ebleh", "ecdat", "eçhel", "edalı", "edebi", "edinç", "edvar", "efdal", "efece", "efekt", "efkar", "eflak", "efrat", "efriz", "efsun", "efsus", "egale", "eglog", "egzoz", "eğlek", "eğmeç", "eğmek", "eğmür", "eğrez", "eğrim", "ehram", "ehven", "ejder", "ekici", "ekili", "eklem", "ekler", "ekmek", "ekmek", "ekose", "ekran", "eksen", "ekser", "eksik", "eksin", "eksiz", "eküri", "elbet", "elcik", "elçek", "elçim", "elden", "eleji", "eleme", "elgin", "elhak", "elifi", "elips", "ellik", "elmas", "elmek", "elvan", "elyaf", "elzem", "emare", "emaye", "emcek", "emcik", "emici", "emlak", "emlik", "emmeç", "emmek", "emraz", "emsal", "emtia", "emval", "emzik", "enayi", "encam", "endam", "ender", "eneme", "eneze", "enfes", "engel", "engin", "enkaz", "enlem", "enöte", "ensar", "ensiz", "entel", "enzim", "eosen", "epeyi", "epope", "epsem", "erbaa", "erbap", "erbaş", "erbin", "ercik", "erciş", "erdek", "erdem", "erden", "ergen", "ergin", "erika", "erime", "erinç", "erkan", "erkeç", "erkek", "erken", "erkin", "erkli", "erlik", "ermek", "ermin", "ermiş", "eroin", "ersiz", "ervah", "erzak", "erzel", "erzin", "esame", "esans", "esasi", "esbak", "esbap", "eseme", "esham", "esire", "eskil", "eskiz", "eslaf", "eslek", "esmek", "esmer", "esnaf", "esnek", "espas", "espri", "esrar", "esrik", "essah", "ester", "estet", "esvap", "eşarp", "eşhas", "eşkal", "eşkin", "eşlek", "eşlem", "eşlik", "eşmek", "eşraf", "eşref", "eşsiz", "etçik", "etçil", "etene", "etfal", "etken", "etkin", "etlik", "etmek", "etmen", "etnik", "etraf", "etsel", "etsiz", "evaze", "evcek", "evcik", "evcil", "evdeş", "evgin", "evham", "eviye", "evkaf", "evlat", "evlek", "evlik", "evrak", "evrat", "evren", "evren", "evrik", "evrim", "evsaf", "evsin", "evsiz", "evvel", "eylem", "eylül", "eytam", "eyvah", "eyvan", "eyyam", "ezani", "ezber", "ezeli", "ezgiç", "ezgin", "ezici", "ezinç", "ezine", "ezmek", "facia", "fagot", "fahiş", "fahri", "fahte", "fahur", "fakat", "fakih", "fakir", "fakül", "falan", "falcı", "falez", "falso", "falya", "fanta", "fanti", "fanus", "fanya", "farad", "faraş", "farba", "fariğ", "faril", "faset", "fasık", "fasıl", "fasih", "fasit", "faska", "faslı", "fason", "fatih", "fatih", "fatsa", "fauna", "fayda", "fazıl", "fazla", "fecir", "fedai", "fehim", "fehva", "fekül", "felah", "felek", "fenci", "fener", "fenik", "fenni", "fenol", "ferağ", "ferah", "ferda", "ferdi", "ferih", "ferik", "ferli", "ferma", "fesat", "fesih", "fetha", "fetih", "fetiş", "fetüs", "fetva", "fevri", "feyiz", "fıkıh", "fıkra", "fırça", "fırın", "fırka", "fışkı", "fıtık", "fıtri", "fiber", "fidan", "fidye", "fifre", "figan", "figür", "fiili", "fikir", "fikri", "filan", "filar", "filet", "filiz", "filoz", "filsi", "filum", "final", "fince", "finiş", "firak", "firar", "firez", "firik", "firma", "fiske", "fisto", "fişek", "fişka", "fişli", "fitçi", "fitil", "fitin", "fitne", "fitre", "fiyat", "fizik", "flama", "fleol", "flora", "flori", "flöre", "flört", "fodla", "fodra", "fodul", "fokus", "folyo", "fonda", "fondü", "fonem", "forma", "foroz", "forsa", "forte", "forum", "fosil", "frank", "frape", "frenk", "fresk", "freze", "frigo", "frisa", "fuaye", "fuhuş", "fujer", "fular", "fulya", "funda", "furya", "fülüs", "fünye", "füsun", "fütur", "füzen", "gabin", "gabro", "gabya", "gadir", "gafil", "gafur", "gaile", "gaita", "galat", "galip", "galiz", "galon", "galop", "galoş", "gamba", "gamet", "gamlı", "gamze", "garaj", "garaz", "garbi", "garip", "garoz", "gasil", "gaşiy", "gauss", "gavot", "gavur", "gayda", "gayet", "gayrı", "gayri", "gayur", "gayya", "gayya", "gazal", "gazap", "gazel", "gazlı", "gazoz", "gazve", "gebeş", "gebre", "gebze", "geççe", "geçek", "geçen", "geçer", "geçim", "geçiş", "geçit", "geçme", "gedik", "gediz", "gedme", "gelen", "gelin", "gelir", "geliş", "gelme", "gemre", "genel", "geniş", "geniz", "genom", "geoit", "gerçi", "gereç", "gerek", "geren", "gergi", "gerim", "geriş", "geriz", "germe", "gerze", "getto", "gevaş", "geven", "geviş", "gevme", "geyik", "geyşa", "geyve", "geziş", "gezme", "gıcık", "gıcır", "gıdık", "gıdım", "gıpta", "gırla", "gıyap", "gider", "gidiş", "gidon", "giray", "girdi", "giren", "girim", "giriş", "girme", "gitar", "gitme", "giyim", "giyiş", "giyit", "giyme", "giysi", "gizem", "gizil", "gizli", "glase", "gnays", "gocuk", "godoş", "golcü", "gollü", "gonca", "goril", "gotça", "gotik", "göbek", "göbel", "göbüt", "göcen", "göçer", "göçme", "göçük", "göçüm", "göçüş", "göden", "gödeş", "göğem", "göğüs", "gökçe", "gölek", "gölet", "gölge", "gölük", "gömeç", "gömme", "gömük", "gömüş", "gömüt", "göncü", "gönen", "gönen", "gönül", "gönye", "görev", "görgü", "görme", "görüm", "görüş", "gövde", "gövek", "gövel", "gövem", "göyme", "göyük", "gözcü", "gözde", "gözer", "gözgü", "gözlü", "grado", "grena", "grizu", "grogi", "grosa", "guano", "guatr", "gudde", "guguk", "gulaş", "gulet", "gurme", "gurup", "gurur", "gusto", "gusül", "gübre", "gübür", "gücük", "gücün", "güçlü", "güdek", "güdük", "güdül", "güdüm", "güfte", "güğüm", "gülcü", "güleç", "gülle", "güllü", "gülme", "gülük", "gülüş", "gülüt", "gümeç", "gümül", "gümüş", "günah", "günce", "günde", "güneç", "güneş", "güneş", "güney", "güney", "günlü", "güpür", "gürcü", "güreş", "gürsu", "güruh", "gürün", "gütme", "güveç", "güven", "güvez", "güzel", "güzey", "güzün", "habbe", "haber", "habeş", "habeş", "habip", "habis", "hacet", "hacim", "hacir", "haciz", "haçlı", "hadde", "hadım", "hadim", "hadim", "hadis", "hafız", "hafif", "hafik", "hafit", "hafta", "haham", "hahha", "haile", "hakan", "hakas", "hakça", "hakem", "hakim", "hakim", "hakir", "haklı", "halaç", "halas", "halat", "halay", "halef", "halel", "halen", "halet", "halfa", "haliç", "halik", "halim", "halis", "halka", "haluk", "hamak", "hamal", "hamam", "hamel", "hamız", "hamil", "hamiş", "hamla", "hamle", "hamse", "hamsi", "hamur", "hamur", "hamut", "hanak", "hanay", "hancı", "hande", "hanek", "hangi", "hanım", "hanut", "hanya", "hapaz", "hapçı", "hapis", "hapşu", "haraç", "haram", "harap", "harar", "harbe", "harbi", "harbi", "harem", "harım", "harın", "hariç", "harim", "harir", "haris", "harlı", "harta", "hasar", "hasat", "hasbi", "hasep", "haset", "hasıl", "hasım", "hasır", "hasır", "hasis", "haspa", "hassa", "hassa", "hasse", "hasta", "hasut", "haşat", "haşıl", "haşin", "haşir", "haşiş", "haşiv", "hatay", "hatıl", "hatır", "hatif", "hatim", "hatip", "hatmi", "hatta", "hatun", "havai", "havan", "havas", "havlı", "havlu", "havra", "havsa", "havuç", "havut", "havuz", "havva", "havya", "havza", "havza", "hayal", "hayat", "haybe", "haycı", "hayda", "haydi", "hayfa", "hayıf", "hayır", "hayır", "hayıt", "hayız", "hayli", "hayta", "hayta", "hazan", "hazar", "hazar", "hazcı", "hazık", "hazım", "hazır", "hazin", "hazne", "hazro", "hecin", "hedef", "heder", "hedik", "hekim", "helak", "helal", "helen", "helik", "helis", "helke", "helme", "helva", "hemen", "hempa", "hemze", "henüz", "hepsi", "herek", "herif", "herik", "hertz", "herze", "hesap", "heves", "heybe", "heyet", "hezel", "hezen", "hıfız", "hımış", "hınıs", "hırbo", "hırka", "hırlı", "hısım", "hışım", "hışır", "hıyar", "hızar", "hızır", "hızla", "hızlı", "hızma", "hicap", "hicaz", "hiciv", "hicri", "hiççi", "hidiv", "hidra", "hikem", "hilaf", "hilal", "hilat", "hilye", "himen", "hindi", "hindu", "hippi", "hisar", "hisli", "hisse", "hissi", "hitam", "hitan", "hitap", "hitit", "hizan", "hizip", "hodan", "hodri", "hokey", "hokka", "honaz", "hoppa", "horon", "horoz", "horst", "hoşaf", "hoşça", "hoşur", "hotoz", "hozan", "hozat", "hödük", "höyük", "hudut", "hukuk", "hulul", "hulus", "humar", "humma", "humor", "humus", "hurda", "hurma", "hurra", "huruç", "husuf", "husul", "husus", "husye", "hutbe", "hutut", "huylu", "huzur", "hücre", "hücum", "hükmi", "hüküm", "hülle", "hülya", "hüner", "hünsa", "hürle", "hürya", "hüsün", "hüyük", "hüzme", "hüzün", "ığdır", "ığrıp", "ıhmak", "ılgar", "ılgaz", "ılgım", "ılgın", "ılgın", "ılıca", "ılıca", "ılıma", "ıltar", "ırama", "ırgat", "ırkçı", "ırmak", "ıskat", "ıslah", "ıslak", "ıslık", "ısrar", "ıssız", "ıstar", "ışıma", "ışkın", "ıştır", "ıtlak", "ıtrah", "ızgın", "ızrar", "ibare", "ibate", "ibdai", "iblağ", "iblis", "ibraz", "ibret", "ibrik", "ibzal", "icbar", "icmal", "içeri", "içici", "içkin", "içlem", "içlik", "içmek", "içrek", "içsel", "içsiz", "içten", "içyüz", "idadi", "idame", "idare", "idari", "iddia", "ideal", "idman", "idrak", "idrar", "ifade", "iffet", "ifham", "iflah", "iflas", "ifrağ", "ifrat", "ifraz", "ifrit", "ifsat", "iftar", "iğdir", "iğdiş", "iğfal", "iğlik", "ihale", "ihata", "ihbar", "ihdas", "ihlal", "ihlas", "ihlas", "ihmal", "ihraç", "ihram", "ihraz", "ihsan", "ihsas", "ihtar", "ihvan", "ihzar", "ikame", "ikbal", "ikdam", "ikici", "ikili", "iklim", "ikmal", "ikona", "ikrah", "ikram", "ikrar", "ikraz", "iksir", "ilahe", "ilahi", "ilahi", "ilave", "ilbay", "ilenç", "ileri", "ileti", "ilgeç", "ilhak", "ilham", "ilhan", "ilkah", "ilkel", "ilkin", "illet", "ilmek", "ilmek", "ilmik", "ilzam", "imale", "imalı", "imame", "imbat", "imbik", "imdat", "imece", "imkan", "imleç", "imlek", "imlik", "imren", "imroz", "imsak", "inanç", "incik", "incil", "incir", "indis", "infak", "infaz", "ingin", "inkar", "inmek", "inönü", "insaf", "insan", "inşat", "intaç", "intak", "intan", "inzal", "ipçik", "ipeka", "ipham", "iplik", "ipsiz", "iptal", "ipucu", "irade", "iradi", "irfan", "irice", "irite", "irkme", "irmik", "ironi", "irsal", "irsen", "irşat", "isale", "isevi", "ishal", "iskan", "iskoç", "islam", "islav", "islim", "ismen", "ismet", "isnat", "ispat", "ispir", "ispir", "ispit", "israf", "istek", "istem", "ister", "istif", "istim", "istop", "isyan", "işeme", "işgal", "işkal", "işkil", "işlek", "işlem", "işlev", "işlik", "işmar", "işret", "işsiz", "iştah", "işteş", "işyar", "itaat", "iteği", "ithaf", "ithal", "itham", "itici", "itila", "itina", "itlaf", "itlik", "itmam", "itmek", "ivedi", "ivesi", "ivmek", "iyice", "izabe", "izafe", "izafi", "izale", "izhar", "izlek", "izlem", "izlev", "izmir", "izmit", "iznik", "izole", "izzet", "jakar", "japon", "jarse", "jeloz", "jeton", "jikle", "jilet", "joker", "jokey", "jüpon", "kabak", "kaban", "kabız", "kabil", "kabil", "kabin", "kabir", "kablo", "kabuk", "kabul", "kabus", "kabza", "kaçak", "kaçar", "kaçık", "kaçış", "kaçlı", "kaçma", "kaçta", "kadar", "kadeh", "kadem", "kader", "kadın", "kadim", "kadir", "kadir", "kadit", "kadro", "kadük", "kafes", "kafir", "kafur", "kagir", "kağan", "kağıt", "kağnı", "kahır", "kahil", "kahin", "kahir", "kahpe", "kahta", "kahve", "kahya", "kaide", "kaime", "kakaç", "kakao", "kakıç", "kakım", "kakış", "kakma", "kakül", "kalak", "kalan", "kalas", "kalay", "kalbi", "kalcı", "kalça", "kalem", "kalfa", "kalıç", "kalık", "kalım", "kalın", "kalıp", "kalış", "kalıt", "kalma", "kalya", "kaman", "kamçı", "kamer", "kamet", "kamga", "kamış", "kamil", "kamus", "kanal", "kanat", "kanca", "kanık", "kanış", "kanıt", "kaniş", "kanka", "kanlı", "kanma", "kanon", "kanto", "kanun", "kanun", "kapak", "kapan", "kapış", "kapik", "kapiş", "kaplı", "kapma", "kaput", "kapuz", "karar", "karay", "karga", "kargı", "kargı", "kargo", "karha", "karık", "karın", "karış", "karlı", "karlı", "karma", "karne", "karni", "karst", "karşı", "karun", "karun", "karye", "kasap", "kasem", "kaset", "kasık", "kasım", "kasır", "kasıt", "kasis", "kasko", "kaslı", "kasma", "kasnı", "kasti", "kaşan", "kaşar", "kaşık", "kaşif", "kaşlı", "katar", "katçı", "katık", "katım", "katır", "katil", "katil", "katip", "katkı", "katlı", "katma", "katot", "katre", "kavaf", "kavak", "kavak", "kaval", "kavas", "kavat", "kavga", "kavil", "kavim", "kavis", "kavkı", "kavmi", "kavuk", "kavun", "kavut", "kavuz", "kayaç", "kayak", "kayan", "kayar", "kaygı", "kayık", "kayın", "kayın", "kayıp", "kayır", "kayış", "kayıt", "kayıt", "kayma", "kayme", "kayra", "kayşa", "kazak", "kazak", "kazan", "kazan", "kazaz", "kazık", "kazıl", "kazım", "kazma", "keban", "kebap", "kebir", "kebze", "keder", "kefal", "kefen", "kefil", "kefir", "kefne", "kehle", "kekeç", "kekik", "kekre", "kelam", "kelek", "kelem", "kelep", "keler", "keles", "keleş", "kelik", "kelle", "kelli", "kemah", "kemal", "keman", "kemer", "kemer", "kemha", "kemik", "kemre", "kenar", "kendi", "kenef", "kenet", "kepçe", "kepek", "kepez", "kepez", "kepir", "kepme", "kerde", "kerem", "keres", "kerih", "kerim", "keriz", "kerki", "kerte", "kerti", "kesat", "kesbi", "kesek", "kesel", "kesen", "keser", "kesif", "kesik", "kesim", "kesin", "kesir", "kesiş", "kesit", "keski", "kesme", "kesre", "keşan", "keşap", "keşen", "keşif", "keşik", "keşiş", "keşke", "keşki", "ketal", "keten", "keton", "ketum", "kevel", "keven", "keyfi", "keyif", "kıble", "kıdem", "kılgı", "kılıç", "kılıf", "kılık", "kılır", "kılış", "kıllı", "kılma", "kımıl", "kımız", "kınık", "kınlı", "kıpık", "kıpma", "kıpti", "kıraç", "kıran", "kırat", "kıray", "kırba", "kırca", "kırcı", "kırık", "kırım", "kırkı", "kırma", "kısas", "kısık", "kısım", "kısır", "kısış", "kısıt", "kıska", "kıskı", "kısma", "kısmi", "kıssa", "kışın", "kışır", "kışla", "kıtal", "kıtık", "kıtır", "kıvam", "kıyak", "kıyam", "kıyas", "kıygı", "kıyık", "kıyım", "kıyın", "kıyış", "kıyma", "kıyye", "kızak", "kızan", "kızık", "kızıl", "kızış", "kızma", "kibar", "kibir", "kifaf", "kikla", "kiler", "kilim", "kilis", "kilit", "kiliz", "killi", "kilsi", "kilüs", "kimse", "kimüs", "kimya", "kinci", "kinik", "kinin", "kiniş", "kinli", "kiraz", "kiraz", "kirde", "kireç", "kiril", "kiriş", "kirli", "kirpi", "kirve", "kisve", "kitap", "kitin", "kitle", "kitre", "kizir", "klapa", "klima", "klips", "klişe", "koala", "kobay", "kobra", "koçak", "koçan", "koçma", "kodes", "kofra", "kofti", "koful", "koğuş", "kokak", "koket", "kokma", "kokoş", "kokot", "kokoz", "kokuş", "kolaj", "kolan", "kolay", "kolcu", "kolej", "kolik", "kolit", "kollu", "kolon", "kolpo", "kolsu", "kolye", "kolza", "komar", "kombi", "komik", "komot", "komşu", "komut", "komün", "konak", "konak", "kondu", "konik", "konma", "konsa", "konuk", "konum", "konur", "konuş", "konut", "konya", "kopal", "kopça", "kopil", "kopma", "kopoy", "kopuk", "kopuş", "kopuz", "kopya", "koral", "korku", "korna", "korno", "korse", "korte", "koruk", "korun", "korza", "koşaç", "koşam", "koşin", "koşma", "koşuk", "koşul", "koşum", "koşun", "koşut", "kotan", "koton", "kotra", "kovan", "kovcu", "kovma", "kovuk", "kovuş", "koyak", "koyar", "koyma", "koyun", "koyun", "koyuş", "koyut", "kozak", "kozan", "köçek", "köfte", "köhne", "kökçü", "köken", "köklü", "köksü", "kölük", "kömbe", "kömeç", "kömür", "kömüş", "köpek", "köprü", "köpük", "körpe", "körük", "kösçü", "kösem", "kösnü", "köşek", "kötek", "köycü", "köylü", "kraça", "kramp", "krank", "kravl", "kredi", "krema", "kriko", "kroki", "krome", "kroşe", "kubat", "kubbe", "kubur", "kucak", "kudas", "kuduz", "kudüm", "kukla", "kulaç", "kulak", "kulis", "kulle", "kulun", "kulüp", "kuman", "kumar", "kumaş", "kumcu", "kumla", "kumlu", "kumlu", "kumru", "kumru", "kumsu", "kumuç", "kumuk", "kumul", "kunda", "kupes", "kuple", "kupon", "kupür", "kurak", "kural", "kuram", "kurca", "kurgu", "kurma", "kurna", "kuron", "kurul", "kurum", "kuruş", "kurut", "kurya", "kurye", "kusma", "kusur", "kuşak", "kuşça", "kuşçu", "kuşet", "kuşku", "kutan", "kutlu", "kutnu", "kutsi", "kutup", "kutur", "kuver", "kuvöz", "kuvve", "kuytu", "kuyum", "kuzen", "kuzey", "kuzin", "kübik", "küçük", "küflü", "küfür", "kükre", "külah", "külçe", "külek", "külli", "küllü", "külot", "külte", "kümes", "küncü", "künde", "künye", "küplü", "kürar", "kürdi", "kürek", "kürit", "kürsü", "küskü", "küsme", "küspe", "küsuf", "küsur", "küşat", "küşne", "küşüm", "kütin", "kütle", "kütlü", "kütör", "kütük", "küvet", "laçın", "laçin", "laçka", "laden", "lades", "ladik", "ladin", "lafçı", "lafız", "lafzi", "lagar", "lagos", "lagün", "lağım", "lağıv", "lahit", "lahos", "lahut", "lahza", "lakap", "lakçı", "lakin", "lakoz", "lamba", "lamel", "lando", "lanet", "lanse", "lapon", "largo", "larva", "laski", "lasta", "latif", "latin", "lavaj", "lavaş", "lavta", "lavuk", "layık", "lazca", "lazer", "lazım", "lazut", "leçek", "ledün", "legal", "leğen", "lehçe", "lehçe", "lehim", "lemis", "lenfa", "lento", "lepra", "lerze", "letçe", "levha", "levye", "leydi", "leyli", "lezar", "leziz", "lığlı", "lıkır", "libas", "liboş", "libre", "lider", "lifli", "liger", "liken", "likit", "likör", "liman", "limbo", "limit", "limon", "linet", "linin", "lipit", "lipom", "liret", "lirik", "lisan", "liste", "litre", "livar", "liyan", "lizol", "lizöz", "lobut", "lodos", "logos", "lojik", "lokal", "lokma", "lokum", "lonca", "longa", "lopur", "lorta", "loşça", "lotus", "lökoz", "löpür", "lüfer", "lügat", "lügol", "lümen", "lünet", "lüpçü", "lütuf", "lüzum", "maada", "mabat", "mabet", "mabut", "macar", "macun", "maçka", "madam", "madde", "maddi", "madem", "maden", "maden", "mader", "madik", "madun", "mafiş", "mafya", "magma", "magri", "mahal", "mahfe", "mahfi", "mahıv", "mahir", "mahra", "mahur", "mahut", "mahya", "maile", "majör", "makak", "makam", "makas", "makat", "maket", "makro", "maksi", "makta", "maktu", "makul", "makus", "malak", "malaz", "malca", "malcı", "malen", "malik", "malul", "malum", "malya", "mamak", "mambo", "mamul", "mamur", "mamut", "manas", "manat", "manav", "manav", "manca", "mançu", "manda", "manej", "manen", "manga", "mango", "mania", "mantı", "manti", "manto", "maocu", "mapus", "maral", "maraz", "marda", "mariz", "marka", "marke", "marki", "maron", "martı", "maruf", "marul", "maruz", "marya", "masaj", "masal", "masat", "masif", "maske", "masnu", "mason", "masör", "masöz", "mastı", "masum", "masun", "maşer", "maşuk", "matah", "matbu", "matem", "matiz", "matla", "matuf", "matuh", "maval", "maviş", "mavna", "mavra", "mayın", "mayıs", "mayna", "mazak", "mazot", "mazur", "mebde", "mebiz", "mebni", "mebus", "mecal", "mecaz", "mecmu", "mecra", "mecus", "medar", "medet", "medih", "medüz", "medya", "meful", "meğer", "mehaz", "mehdi", "mehil", "mehle", "mekan", "mekik", "melal", "melas", "melce", "melek", "meles", "meleş", "melez", "melik", "melon", "melul", "melun", "memat", "memba", "memnu", "memul", "memur", "menfa", "menfi", "menşe", "menus", "merak", "meram", "meram", "merci", "merek", "meres", "meret", "meriç", "merih", "mermi", "mesai", "mesaj", "mesel", "mesen", "mesih", "mesmu", "mesul", "mesut", "meşbu", "meşin", "meşru", "meşum", "metal", "metan", "metbu", "metil", "metin", "metin", "metis", "metot", "metre", "metro", "mevdu", "mevki", "mevla", "mevla", "mevta", "mevut", "mevzi", "mevzu", "meyan", "meyil", "meyus", "meyve", "mezar", "mezat", "mezon", "mezra", "mezru", "mezun", "mezür", "mezzo", "mıcır", "mıgır", "mıgri", "mıhlı", "mırra", "mısır", "mısır", "mısra", "miçel", "midye", "mikap", "mikoz", "mikro", "milas", "milat", "milel", "milim", "milis", "milli", "milli", "mimar", "mimik", "mimli", "minik", "minör", "miraç", "miras", "mirat", "mirza", "misak", "misal", "misel", "misil", "misis", "mitil", "mitos", "mitoz", "miyar", "miyav", "miyaz", "miyom", "miyop", "mizaç", "mizah", "mizan", "mobil", "model", "modem", "modül", "moğol", "moher", "molas", "molla", "moloz", "monat", "monte", "mopet", "moral", "moren", "morto", "moruk", "motel", "motif", "motor", "motto", "mozak", "möble", "mösyö", "muare", "mucip", "mucir", "mucit", "mucuk", "mucur", "mucur", "mufla", "muğla", "muhal", "muhat", "muhik", "muhil", "muhip", "muhit", "mujik", "mukim", "mukni", "mukus", "mulaj", "mumcu", "mumlu", "mumya", "munis", "murat", "muris", "musap", "musır", "muska", "muson", "muşlu", "muşta", "muştu", "mutaf", "mutat", "mutçu", "mutki", "mutlu", "muylu", "muzır", "muzip", "muzsu", "mübah", "müdür", "müfit", "müftü", "mühim", "mühre", "mühür", "müjde", "mülga", "mülki", "mümas", "mümin", "münşi", "mürai", "mürit", "mürur", "müşir", "müziç", "müzik", "nabız", "nacak", "naçar", "naçiz", "nadan", "nadas", "nadim", "nadir", "nafia", "nafiz", "nafta", "nağme", "nahak", "nahır", "nahif", "nahiv", "nahoş", "nakdi", "nakıs", "nakış", "nakız", "nakil", "nakil", "nakip", "nakit", "nakli", "nakşi", "nalan", "nalça", "nalın", "namaz", "namlı", "namlu", "namus", "nanay", "nanik", "narin", "nasıl", "nasıp", "nasır", "nasip", "nasir", "naşir", "natır", "natuk", "natür", "nazal", "nazar", "nazım", "nazım", "nazır", "nazik", "nazil", "nazir", "nazlı", "nebat", "necat", "necip", "nedbe", "neden", "nedim", "nefer", "nefes", "nefha", "nefir", "nefis", "nefiy", "nefti", "nehir", "nehiy", "nekes", "nekre", "nemçe", "nemli", "nemse", "nesep", "nesiç", "nesih", "nesil", "nesim", "nesir", "nesne", "neşet", "neşir", "nevir", "neyçe", "neyse", "nezif", "nezih", "nezir", "nezle", "nısıf", "nicel", "niçin", "nifak", "niğde", "nihai", "nihan", "nikah", "nikap", "nikel", "nimet", "ninni", "nipel", "nisai", "nisan", "nisap", "nispi", "nişan", "nitel", "niyaz", "niyet", "nizam", "nizip", "nodul", "nodül", "nogay", "nohut", "nokra", "nokta", "nonoş", "notam", "noter", "nöbet", "nöron", "nukut", "numen", "nurlu", "nutuk", "nüans", "nüfus", "nüfuz", "nükte", "nükul", "nüsha", "nüzul", "oberj", "obruk", "ocuma", "odacı", "odalı", "odeon", "odsuz", "ofans", "oflaz", "ofris", "ofset", "oğlak", "oğlak", "oğlan", "ojeli", "okapi", "okluk", "oksit", "oktan", "oktav", "okuma", "okume", "olası", "olçum", "oleik", "olein", "olgun", "olmak", "olmaz", "olmuş", "oluru", "ombra", "omlet", "onama", "ongen", "ongun", "oniks", "onlar", "onluk", "onmak", "onsuz", "opera", "optik", "orada", "oralı", "orası", "oraya", "orcik", "orfoz", "organ", "orgcu", "orion", "orkit", "orlon", "orman", "ortaç", "ortak", "ortam", "ortay", "ortez", "ortoz", "otacı", "otama", "otçul", "otist", "otizm", "otlak", "otluk", "otsul", "otsuz", "ovalı", "ovmaç", "ovmak", "oyacı", "oyalı", "oydaş", "oylum", "oymak", "oymak", "oynak", "oynaş", "ozmoz", "ozuga", "öbürü", "ödeme", "ödlek", "ödünç", "öğlen", "öğrek", "öksüz", "ölçek", "ölçer", "ölçme", "ölçüm", "ölçün", "ölçüş", "ölçüt", "ölgün", "ölmek", "ölmez", "ölmüş", "öncel", "öncül", "önder", "öneri", "öneze", "önlem", "önlük", "önsel", "öpmek", "örcin", "ördek", "öreke", "örgen", "örgün", "örgüt", "örmek", "örnek", "örtme", "örtük", "örtüş", "örücü", "örülü", "öteki", "ötmek", "ötücü", "ötürü", "övmek", "övücü", "övünç", "özalp", "özbek", "özdek", "özden", "özdeş", "özeme", "özenç", "özeni", "özerk", "özgül", "özgün", "özgür", "özlem", "özlük", "öznel", "özsel", "pabuç", "paçal", "paçoz", "padok", "pafta", "pagan", "pahal", "paket", "palan", "palas", "palaz", "palet", "palto", "pampa", "pamuk", "panda", "panel", "panik", "papak", "papaz", "papel", "paraf", "parça", "parka", "parke", "parpa", "parsa", "parti", "parya", "pasaj", "pasak", "pasçı", "pasif", "paslı", "pasör", "pasta", "patak", "patal", "paten", "patik", "patoz", "paunt", "payan", "payda", "payen", "payet", "paylı", "pazar", "pazar", "pazen", "peçiç", "pedal", "peder", "pekçe", "pelin", "pelit", "pelte", "pelür", "pelüş", "pembe", "pençe", "penes", "pengö", "penis", "pense", "penye", "perde", "peren", "perki", "perma", "permi", "peron", "peruk", "perva", "pesek", "pesüs", "peşin", "peşli", "peştu", "petek", "peyda", "peyke", "pıhtı", "pınar", "pırpı", "pırtı", "pısma", "pigme", "pikaj", "pikap", "piket", "pilav", "piliç", "pilli", "pilot", "pinel", "pines", "pinti", "pipet", "pirit", "pisik", "pisin", "pişek", "pişik", "pişim", "pişme", "pişti", "piton", "piyan", "piyaz", "piyes", "piyon", "pizza", "plaka", "plase", "plati", "plato", "plaza", "poker", "polar", "polat", "polen", "polim", "polip", "polis", "polka", "polüm", "pomak", "pomat", "pompa", "ponje", "ponza", "popçu", "porno", "porte", "porto", "posof", "posta", "poşet", "potas", "potin", "potuk", "potur", "poyra", "pöçük", "prafa", "prens", "prese", "proje", "prova", "pruva", "pudra", "pufla", "pulcu", "pullu", "pulsu", "puluç", "pumba", "punto", "pusat", "puset", "puslu", "pusma", "puvar", "pünez", "püren", "pürüz", "püsür", "pütür", "rabıt", "racon", "radar", "radde", "radon", "radyo", "rafit", "raflı", "rafya", "ragbi", "rahat", "rahim", "rahim", "rahip", "rahle", "rahne", "rakam", "raket", "rakım", "rakik", "rakip", "rakit", "rakor", "rakun", "ralli", "ramak", "rampa", "randa", "ranza", "rapor", "rasat", "rasıt", "raspa", "rasyo", "ratıp", "raunt", "rayba", "rayiç", "reaya", "rebap", "recep", "recim", "reçel", "redif", "refah", "refik", "refüj", "rehin", "rejim", "rekat", "rekiz", "rekor", "remel", "remil", "remiz", "rende", "resen", "resif", "resim", "resmi", "resul", "reşit", "reşme", "revaç", "revak", "revan", "revir", "reviş", "reyon", "rezil", "rızık", "rical", "ricat", "rijit", "rimel", "ringa", "ritim", "riyal", "robot", "rodaj", "rodeo", "roket", "rolcü", "roman", "roman", "romen", "rosto", "rotil", "rotor", "rozet", "röfle", "rögar", "rötar", "rötuş", "rubai", "ruble", "rufai", "rugan", "ruhça", "ruhen", "ruhlu", "rujlu", "rulet", "rumba", "rumca", "rumuz", "runik", "rusça", "rutin", "rüesa", "rükün", "rüküş", "rüsum", "rüsup", "rüsva", "rütbe", "rüyet", "sabah", "saban", "sabık", "sabır", "sabit", "sabuh", "sabun", "sabur", "saçak", "saçık", "saçış", "saçlı", "saçma", "sadak", "sadet", "sadık", "sadır", "sadır", "sadik", "sadme", "safça", "safer", "safha", "safir", "safra", "sağcı", "sağım", "sağın", "sağır", "sağma", "sağrı", "sahaf", "sahan", "sahih", "sahil", "sahip", "sahne", "sahra", "sahre", "sahte", "sahur", "saika", "sakaf", "sakak", "sakal", "sakar", "sakat", "sakın", "sakıt", "sakız", "sakil", "sakim", "sakin", "sakit", "saklı", "saksı", "salah", "salak", "salam", "salaş", "salat", "salcı", "salça", "salep", "salgı", "salık", "salik", "salim", "salip", "sallı", "salma", "salon", "saloz", "salpa", "salsa", "salta", "salto", "salur", "salvo", "salya", "saman", "samba", "samsa", "samur", "samut", "sanal", "sanat", "sancı", "sanem", "sangı", "sanık", "sanış", "sanki", "sanlı", "sanma", "sanrı", "sapak", "sapan", "sapık", "sapış", "sapkı", "saplı", "sapma", "saraç", "sarak", "sarat", "saray", "saray", "sargı", "sarık", "sarım", "sarış", "sarız", "sarig", "sarih", "sarma", "sarpa", "sason", "saten", "sathi", "satıh", "satım", "satır", "satış", "satir", "satma", "sauna", "savak", "savan", "savaş", "savat", "savca", "savcı", "savla", "savlo", "savma", "savur", "sayaç", "sayfa", "saygı", "sayha", "sayım", "sayın", "sayış", "sayma", "sayrı", "sazak", "sazan", "sazcı", "sazlı", "seans", "sebat", "seben", "sebep", "sebil", "sebze", "secde", "seçal", "seçim", "seçiş", "seçki", "seçme", "sedef", "sedir", "sedye", "sefer", "sefih", "sefil", "sefir", "segah", "seher", "sehim", "sehiv", "sehpa", "sekel", "sekil", "sekiş", "sekiz", "sekme", "seksi", "sekte", "selam", "selef", "selek", "selen", "selim", "selim", "selis", "selva", "selvi", "semah", "semai", "seman", "semen", "semer", "semih", "semiz", "sence", "senek", "senet", "senir", "senit", "sepek", "sepet", "sepya", "serak", "serap", "serçe", "seren", "sergi", "serik", "serim", "serin", "seriş", "serme", "serum", "servi", "sesçi", "sesli", "seter", "setik", "sevap", "sevda", "sever", "sevgi", "sevim", "sevir", "seviş", "sevme", "seyek", "seyir", "seyis", "seyit", "sezgi", "seziş", "sezme", "sezon", "sıcak", "sıçan", "sıçma", "sıfat", "sıfır", "sığın", "sığır", "sığla", "sığma", "sıhhi", "sıhri", "sıkça", "sıkım", "sıkıt", "sıkma", "sımak", "sınai", "sınav", "sındı", "sınıf", "sınık", "sınır", "sınma", "sırat", "sırcı", "sırça", "sırık", "sırım", "sırlı", "sırma", "sıska", "sıtma", "sıvık", "sıyga", "sıygı", "sızak", "sızış", "sızma", "sibop", "sicil", "sicim", "sidik", "sifin", "sifon", "sigar", "siğil", "sihir", "siirt", "sikke", "sikme", "silah", "silaj", "silgi", "silik", "silis", "siliş", "silki", "sille", "silme", "simav", "simge", "simit", "simya", "sinek", "sinik", "sinir", "siniş", "sinle", "sinme", "sinop", "sinsi", "sinüs", "siper", "sipsi", "siren", "sirke", "sirmo", "siroz", "sirto", "sisli", "sitem", "sitil", "sivas", "sivil", "sivri", "siyah", "siyak", "siyek", "siyer", "siyme", "sizce", "skala", "skink", "slayt", "sofra", "softa", "soğan", "soğuk", "sokak", "soket", "sokma", "sokra", "sokum", "sokur", "sokuş", "solak", "solcu", "solma", "soluk", "soluk", "soluş", "somak", "somon", "somun", "somut", "somya", "sonar", "sonat", "sonda", "sonlu", "sonra", "sonuç", "sorgu", "sorit", "sorma", "sorti", "sorum", "sorun", "soruş", "sosis", "soyka", "soylu", "soyma", "soyum", "soyuş", "soyut", "söğüş", "söğüt", "söğüt", "sökel", "sökme", "sökük", "söküm", "sökün", "söküş", "sölom", "sönme", "sönük", "sönüm", "sönüş", "söven", "sövgü", "sövme", "sövüş", "sözce", "sözcü", "sözde", "sözel", "sözlü", "spazm", "sperm", "sprey", "stant", "statü", "steno", "stent", "stilo", "streç", "stres", "suare", "subay", "subra", "subye", "sucuk", "sucul", "suçlu", "sudak", "sudan", "sufle", "sukut", "sulak", "sulta", "suluk", "sumak", "sunak", "sungu", "sunma", "sunta", "sunum", "sunuş", "suoku", "supap", "surat", "suret", "suruç", "susak", "susam", "susku", "susma", "susta", "susuş", "susuz", "susuz", "sutaş", "sutlu", "suvat", "suyuk", "sübek", "sübut", "sübye", "sücut", "süfli", "süğme", "sükse", "sükun", "sükut", "süluk", "sülük", "sülün", "sülüs", "sümek", "sümen", "sümer", "sümük", "süngü", "sünme", "sünni", "süper", "sürat", "süreç", "sürek", "sürfe", "sürgü", "sürme", "sürre", "sürur", "sürüm", "sürüş", "süsen", "süslü", "süsme", "sütçü", "sütlü", "sütre", "sütsü", "sütun", "süven", "süvme", "süyek", "süyüm", "süzek", "süzgü", "süzme", "süzük", "süzüş", "şaban", "şafak", "şafii", "şaful", "şahap", "şahıs", "şahin", "şahit", "şahne", "şahsi", "şaibe", "şaire", "şakak", "şakul", "şalak", "şaman", "şaman", "şamar", "şamil", "şanlı", "şapçı", "şapel", "şapka", "şaplı", "şarap", "şarkı", "şarki", "şarpi", "şaryo", "şaşaa", "şaşma", "şatır", "şavul", "şayak", "şayan", "şayet", "şayia", "şayka", "şebek", "şedde", "şedit", "şefik", "şehir", "şehit", "şehla", "şekel", "şeker", "şekil", "şekli", "şekva", "şelek", "şemse", "şemsi", "şepit", "şeran", "şeref", "şerha", "şerif", "şerik", "şerir", "şerit", "şerpa", "şetim", "şınav", "şıpka", "şırak", "şifon", "şifre", "şikar", "şilem", "şilep", "şilin", "şilte", "şimal", "şimdi", "şinik", "şinto", "şiran", "şirin", "şişek", "şişik", "şişko", "şişli", "şişme", "şoför", "şopar", "şorca", "şoset", "şoson", "şoven", "şölen", "şömiz", "şöyle", "şuara", "şubat", "şuhut", "şunca", "şurup", "şükür", "şüphe", "tabak", "taban", "tabii", "tabip", "tabir", "tabla", "tablo", "tabur", "tabut", "tabya", "tacik", "tacil", "tacir", "taciz", "taçlı", "tadat", "tadım", "tadil", "tafra", "tafta", "tahıl", "tahin", "tahra", "tahta", "takas", "takat", "takık", "takım", "takim", "takip", "takke", "takla", "takma", "takoz", "taksa", "taksi", "takti", "takva", "talak", "talan", "talas", "talaş", "talaz", "talep", "talih", "talik", "talil", "talim", "talip", "tamah", "tamam", "tamik", "tamim", "tamir", "tanen", "tango", "tanık", "tanım", "tanış", "tanıt", "tanin", "tanrı", "tanrı", "taocu", "tapan", "tapış", "tapir", "tapma", "tapon", "taraf", "tarak", "taraş", "taraz", "taret", "tarım", "tarif", "tarih", "tarik", "tariz", "tarla", "tarot", "tartı", "tasar", "tasdi", "tasım", "tasma", "tasni", "taşak", "taşçı", "taşıl", "taşım", "taşıt", "taşlı", "taşma", "taşra", "taşsı", "tatar", "tatar", "tatil", "tatlı", "tatma", "tavaf", "tavan", "tavas", "tavcı", "tavır", "tavik", "taviz", "tavla", "tavlı", "tavuk", "tavus", "tayfa", "tayga", "tayın", "tayin", "tayip", "tazim", "tazip", "taziz", "teali", "teati", "tebaa", "teber", "tecil", "tecim", "tedai", "tedip", "teğet", "tehir", "teist", "teizm", "tekçi", "tekel", "teker", "tekil", "tekin", "tekir", "tekit", "tekke", "tekli", "tekme", "tekne", "tekst", "telaş", "telef", "telek", "telem", "teles", "telif", "telin", "telis", "telli", "telsi", "telve", "temas", "temek", "temel", "temin", "temiz", "tempo", "tenge", "tenha", "tenis", "tenor", "tente", "tenya", "teori", "tepik", "tepir", "tepiş", "tepke", "tepki", "tepme", "tepsi", "teras", "terbi", "terek", "teres", "terfi", "terim", "terki", "terli", "terme", "terme", "terör", "terzi", "tesir", "tesis", "tesit", "tesri", "testi", "teşci", "teşne", "teşri", "teşyi", "tetik", "tetik", "tetir", "tevdi", "tevek", "tevil", "tevki", "tevsi", "tevzi", "teyel", "teyit", "teyze", "tezat", "tezce", "tezek", "tezli", "tıbbi", "tıfıl", "tıkaç", "tıkım", "tıkır", "tıkız", "tıkma", "tımar", "tınaz", "tınma", "tıpkı", "tırak", "tıraş", "tırık", "tırıl", "tırıs", "tifüs", "tikel", "tilki", "timüs", "tiner", "tipik", "tiraj", "tiran", "tirat", "tirit", "tiriz", "tirle", "tirsi", "tirşe", "titan", "titiz", "tohum", "tokaç", "tokat", "tokat", "toklu", "tokuz", "tokyo", "tolga", "tomak", "tomar", "tonaj", "toner", "tonga", "tonik", "tonla", "tonlu", "tonoz", "tonya", "topaç", "topak", "topal", "topaz", "topçu", "topik", "topla", "toplu", "topuk", "topur", "toput", "topuz", "torak", "torba", "torik", "torna", "tortu", "torul", "torum", "torun", "tosun", "tosya", "total", "totem", "toyca", "toycu", "toyga", "tozan", "tozlu", "tozma", "törel", "tören", "törpü", "tövbe", "tözel", "trafo", "trake", "trans", "tranş", "trata", "triko", "tromp", "tröst", "tufan", "tugay", "tuğcu", "tuğla", "tuğlu", "tuğra", "tuhaf", "tuluk", "tulum", "tulup", "tuman", "tumba", "tunik", "turaç", "turan", "turba", "turbo", "turfa", "turna", "turne", "turno", "turşu", "turta", "tutaç", "tutak", "tutak", "tutam", "tutar", "tutku", "tutma", "tutuk", "tutum", "tutuş", "tutya", "tuval", "tuyuğ", "tuzak", "tuzcu", "tuzla", "tuzla", "tuzlu", "tuzsu", "tüfek", "tümce", "tümel", "tümen", "tümey", "tümör", "tümür", "tünek", "tünel", "tünme", "tüpçü", "tüplü", "türap", "türbe", "türel", "türev", "türki", "türkü", "türlü", "türüm", "tütme", "tütsü", "tütün", "tüvit", "tüylü", "tüyme", "tüzel", "tüzük", "tvist", "ucube", "uçarı", "uçkun", "uçkur", "uçmak", "uçmak", "uçman", "uçsuz", "uçucu", "uğrak", "uğraş", "uğrun", "ukala", "uknum", "ulama", "ulema", "ulufe", "uluma", "umacı", "ummak", "umman", "umumi", "unluk", "unsur", "unvan", "urban", "urgan", "usanç", "usare", "uskur", "ussal", "uşkun", "uşşak", "utanç", "utmak", "uyarı", "uygar", "uygun", "uygur", "uyluk", "uymak", "uymaz", "uyruk", "uysal", "uyuma", "uzama", "uzlet", "uzluk", "uzman", "ücret", "üçgen", "üçgül", "üçkat", "üçler", "üçlük", "üçtaş", "üdeba", "üfleç", "üğrüm", "ülfet", "ülger", "ülker", "ülser", "ümera", "ümmet", "ümran", "ündeş", "ünite", "ünlem", "ünsüz", "üreme", "üremi", "ürgüp", "ürkek", "ürkme", "ürküş", "ürüme", "üryan", "üsera", "üsküf", "üslup", "üstat", "üstel", "üstlü", "üstün", "üşenç", "üşmek", "üşüme", "ütmek", "ütücü", "ütülü", "üzere", "üzeri", "üzgün", "üzlük", "üzmek", "üzücü", "üzünç", "vacip", "vagon", "vahim", "vahit", "vahiy", "vahşi", "vakar", "vakfe", "vakıa", "vakıa", "vakıf", "vakıf", "vakit", "vakum", "vakur", "valiz", "valör", "vanlı", "vapur", "varak", "varan", "varda", "vargı", "varış", "varil", "varis", "varis", "varit", "varma", "varoş", "varta", "varto", "vasat", "vasıf", "vasıl", "vaşak", "vatan", "vatka", "vatoz", "vazıh", "vebal", "vecih", "veciz", "veçhe", "vedia", "vefat", "vehim", "vekil", "velet", "velur", "velut", "venüs", "verdi", "verem", "verev", "vergi", "verim", "veriş", "verit", "verme", "vezin", "vezir", "vezne", "vıcık", "video", "vigla", "villa", "viraj", "viral", "viran", "virüs", "visal", "viski", "vişne", "vites", "vitir", "viyak", "viyol", "vizon", "vizör", "vokal", "volan", "volta", "vonoz", "votka", "voyvo", "vukuf", "vulva", "vuraç", "vurgu", "vurma", "vuruk", "vuruş", "vusul", "vuzuh", "vücut", "vürut", "vüsat", "yaban", "yabgu", "yafta", "yağar", "yağcı", "yağır", "yağış", "yağız", "yağlı", "yağma", "yağsı", "yahey", "yahni", "yahşi", "yahut", "yakım", "yakın", "yakış", "yakıt", "yakin", "yakma", "yakut", "yakut", "yalak", "yalan", "yalaz", "yalım", "yalın", "yalız", "yalpa", "yalpı", "yamaç", "yamak", "yaman", "yamçı", "yamuk", "yanak", "yanal", "yanay", "yanaz", "yancı", "yangı", "yanık", "yanış", "yanıt", "yankı", "yanlı", "yanma", "yansı", "yapak", "yapay", "yapık", "yapım", "yapış", "yapıt", "yapma", "yarak", "yaran", "yarar", "yaraş", "yarda", "yaren", "yargı", "yarık", "yarım", "yarın", "yarış", "yarka", "yarma", "yasak", "yasal", "yasin", "yaslı", "yasma", "yassı", "yaşam", "yaşça", "yaşıt", "yaşlı", "yatak", "yatay", "yatçı", "yatık", "yatım", "yatır", "yatış", "yatma", "yatsı", "yavan", "yavaş", "yaver", "yavru", "yavsı", "yavuz", "yayan", "yaygı", "yayık", "yayım", "yayın", "yayış", "yayla", "yaylı", "yayma", "yazar", "yazgı", "yazık", "yazım", "yazın", "yazır", "yazış", "yazıt", "yazma", "yedek", "yediz", "yedme", "yegah", "yegan", "yeğen", "yeğin", "yeğni", "yekta", "yekun", "yeleç", "yelek", "yelin", "yelli", "yelme", "yelve", "yemci", "yemek", "yemek", "yemin", "yemiş", "yenge", "yengi", "yenik", "yenik", "yenli", "yenme", "yerel", "yerey", "yergi", "yerli", "yerme", "yeşil", "yeşim", "yeter", "yetik", "yetim", "yetke", "yetki", "yetme", "yevmi", "yeygi", "yezit", "yığın", "yığış", "yığma", "yıkık", "yıkım", "yıkış", "yıkma", "yılan", "yılgı", "yılık", "yılkı", "yılma", "yırık", "yiğit", "yirik", "yirmi", "yitik", "yitim", "yitiş", "yitme", "yivli", "yiyim", "yiyiş", "yobaz", "yoğun", "yokçu", "yoksa", "yokuş", "yolak", "yolcu", "yollu", "yolma", "yoluk", "yomra", "yonca", "yonga", "yonma", "yontu", "yorga", "yorma", "yortu", "yorum", "yosma", "yosun", "yönlü", "yörük", "yudum", "yufka", "yukaç", "yulaf", "yular", "yumak", "yumak", "yumma", "yumru", "yumuk", "yunak", "yunak", "yunan", "yunma", "yunus", "yurdu", "yutak", "yutma", "yutum", "yutuş", "yuvak", "yuvar", "yuvgu", "yükçü", "yüklü", "yüküm", "yükün", "yülgü", "yülük", "yünlü", "yürek", "yürük", "yüsrü", "yüzde", "yüzer", "yüzey", "yüzlü", "yüzme", "yüzük", "yüzüş", "zabıt", "zabit", "zafer", "zağar", "zağcı", "zağlı", "zahir", "zahir", "zahit", "zalim", "zaman", "zamir", "zamlı", "zamme", "zanka", "zanlı", "zarar", "zarcı", "zarif", "zarsı", "zarta", "zaten", "zayıf", "zeban", "zebra", "zebun", "zebur", "zecir", "zecri", "zefir", "zehap", "zehir", "zekat", "zeker", "zelil", "zelve", "zemin", "zenci", "zenne", "zerde", "zerre", "zeval", "zevat", "zevce", "zeyil", "zıbın", "zıhlı", "zımba", "zımni", "zıpır", "zıpka", "zırva", "zifaf", "zifin", "zifir", "zifos", "zigon", "zigot", "zihaf", "zihin", "zihni", "zikir", "zilli", "zimmi", "zinde", "zirai", "zirve", "ziyan", "zloti", "zombi", "zorba", "zorca", "zorgu", "zorla", "zorlu", "zorun", "zuhur", "zulüm", "zurna", "zübde", "zühal", "zühre", "zühul", "zükam", "zülal", "zülüf", "zümre", "züppe", "zürra", "züyuf"]
const alphaArray = [100, 101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,199,214,220,231,246,252,286,287,304,305,350,351,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99]


function occCount(word, letter)
{
    var count = 0;
    for (var i = 0; i < word.length; i++)
    {
        if(word[i] == letter){count++;}
    }
    return count;
}

function createIdxDict(word)
{
    let idxDict = {};
    const letterSet = new Set();
    for(var i = 0; i < word.length; i++)
    {
        letterSet.add(word[i]);
    }
    
    letterSet.forEach(letter => {
        idxDict[letter] = new Array();
    });
    

    for(var i = 0; i < word.length; i++)
    {
        idxDict[word[i]].push(i);
    }


    return idxDict;
}

function createOccDict(word)
{
    let retDict = {};
    const letterSet = new Set();
    for(var i = 0; i < word.length; i++)
    {
        letterSet.add(word[i]);
    }
    
    letterSet.forEach(letter => {
        retDict[letter] = 0;
    });
    
    for (var letter of letterSet)
    {
        for(var i = 0; i < word.length; i++)
        {
            if(letter === word[i]){ retDict[letter]++; }
        }
    }

    return retDict;
}

function createRevDict(word)
{
    retDict = {}
    for(var i = 0; i < word.length; i++)
    {
        retDict[i] = word[i];
    }
    return retDict;
}

function Upper(input)
{
    var ret = "";
    for(var i=0; i < input.length; i++)
    {
        if([105, 73, 304, 305].includes(input.charCodeAt(i)))
        {
            switch( input.charCodeAt(i) )
            {
                case 105:
                case 304:
                    ret += String.fromCharCode(304); 
                    break;
                case 73:
                case 305:
                    ret += String.fromCharCode(73);
                    break;
            }
        }
        else
        {
            ret += input[i].toUpperCase();
        }
    }
    return ret;
}

function Lower(input)
{
    var ret = "";
    for(var i=0; i < input.length; i++)
    {
        if([105, 73, 304, 305].includes(input.charCodeAt(i)))
        {
            switch( input.charCodeAt(i) )
            {
                case 105:
                case 304:
                    ret += String.fromCharCode(105); 
                    break;
                case 73:
                case 305:
                    ret += String.fromCharCode(305);
                    break;
            }
        }
        else
        {
            ret += input[i].toLowerCase();
        }
    }
    return ret;
}

function Alpha(input){
    if(input.length != 1){return -1}
    return alphaArray.includes(input.charCodeAt(0));
}

function helpDelete(currentRow)
{
    var tiles = currentRow.getElementsByClassName("tile");
    for(var i = 0; i < tiles.length; i++)
    {
        if(tiles[i].textContent == "")
        {
            var ret = i == 0 ? 0 : i - 1; 
            return ret;
        }
    }

    return (tiles.length - 1);
}

function helpAdd(currentRow)
{
    var tiles = currentRow.getElementsByClassName("tile");
    for(var i = 0; i < tiles.length; i++)
    {
        if(tiles[i].textContent == "")
        {
            return i; 
        }
    }

    return -1;
}

function changeKeyboard(clickedElement){
    
    if(clickedElement.textContent == "DELETE" || clickedElement == "Backspace" || clickedElement.textContent == "⌫")
    {     
        var tileToEdit = currentRow.getElementsByClassName("tile")[helpDelete(currentRow)];  
        tileToEdit.textContent = "";
        tileToEdit.style.borderColor = "rgb(128, 128, 128)";
    }
    else
    {
        // harf ekleme
        var tileToEdit = currentRow.getElementsByClassName("tile")[helpAdd(currentRow)];
        try {
            // virtual keyboard   
             
            tileToEdit.textContent = Upper(clickedElement.textContent);

        } catch (error) {
            try {
                // physical keyboard                
                
                tileToEdit.textContent = Upper(clickedElement);
                
            } catch (error) {}
        } 
        tileToEdit.style.borderColor = "rgb(255, 255, 255)";       
    }
}

function clearScreen()
{
    document.getElementsByClassName("message")[0].textContent = "";
    document.getElementsByClassName("retry")[0].textContent = "SIFIRLA";
    gameOver=false;
    var buttons = document.getElementsByClassName("kb-button");
    for(var i = 0; i < buttons.length; i++)
    {
        buttons[i].style.backgroundColor = "rgb(128, 128, 128)";
    }

    var tiles = document.getElementsByClassName("tile");
    for(var i = 0; i < tiles.length; i++)
    {
        tiles[i].textContent = "";
        tiles[i].style.backgroundColor = "rgb(0, 0, 0)";
        tiles[i].style.borderColor = "rgb(128, 128, 128)";
    }
    rowCount = 0;
}

function checkInput(input)
{
    if(input.length != 5)
    {
        return 1; // error code for length mismatch
    }
    for (var i = 0 ; i < input.length; i++)
    {
        if(Upper(input[i]) == Lower(input[i]))
        {
            return 2; // error code for non alphabetic character
        }
    }
    return 3;
}

function checkIdx2(inputOccDict, idxDict, occDict, inputRevDict, wordRevDict)
{
    var tiles = currentRow.getElementsByClassName("tile");
    var correctNum = 0;

    var placementArr = [null, null, null, null, null];

    var processed = 0;
    var later = 0;
    
    var localInputOccDict = {};
    var localWordOccDict = {};

    for(var key in inputOccDict){localInputOccDict[key] = inputOccDict[key]};
    for(var key in occDict){localWordOccDict[key] = occDict[key]};

    for(var key in wordRevDict)
    {
        var inputCurrLet = inputRevDict[key];
        var wordCurrLet = wordRevDict[key];
        if(wordCurrLet == inputCurrLet) // dogru yerde dogru harf
        {
            tiles[key].style.backgroundColor = "rgb(83, 141, 78)";
            placementArr[key] = "g";
            greenArr.push(inputCurrLet);

            for (var buttonIdx = 0; buttonIdx < buttons.length; buttonIdx++)
            {
                if(buttons[buttonIdx].classList.contains(Lower(inputCurrLet)))
                {
                    buttons[buttonIdx].style.backgroundColor = "rgb(83, 141, 78)";
                }
            }

            localInputOccDict[inputCurrLet]--;
            localWordOccDict[wordCurrLet]--;
            processed++;
            correctNum++;

        }
        else
        {
            if(! (idxDict.hasOwnProperty(inputCurrLet)))
            {
                tiles[key].style.backgroundColor = "rgb(58, 58, 60)";

                processed++;
                
                for (var buttonIdx = 0; buttonIdx < buttons.length; buttonIdx++)
                {
                    if(buttons[buttonIdx].classList.contains(Lower(inputCurrLet)))
                    {
                        buttons[buttonIdx].style.backgroundColor = "rgb(58, 58, 60)";
                    }
                }
            }
            else if(localWordOccDict[inputCurrLet] == 0)
            {                
                tiles[key].style.backgroundColor = "rgb(58, 58, 60)";
                

                for (var buttonIdx = 0; buttonIdx < buttons.length; buttonIdx++)
                {
                    if(buttons[buttonIdx].classList.contains(Lower(inputCurrLet)) && !(greenArr.includes(inputCurrLet) || yellowArr.includes(inputCurrLet)))
                    {
                        buttons[buttonIdx].style.backgroundColor = "rgb(58, 58, 60)";
                    }
                }
                
                processed++;
            }
            else{ later++; }
        }
    }

    if(later == 0) { return correctNum; } // all processed
    else
    {
        for(var secondKey in inputRevDict)
        {
            inputCurrLet = inputRevDict[secondKey];
            if(inputRevDict[secondKey] != wordRevDict[secondKey])
            {
                if(localWordOccDict[inputRevDict[secondKey]] > 0)
                {
                    tiles[secondKey].style.backgroundColor = "rgb(234, 179, 8)";
                    localWordOccDict[inputRevDict[secondKey]]--;
                    for (var buttonIdx = 0; buttonIdx < buttons.length; buttonIdx++)
                    {
                        if(buttons[buttonIdx].classList.contains(Lower(inputCurrLet)) && !greenArr.includes(inputCurrLet))
                        {
                            buttons[buttonIdx].style.backgroundColor = "rgb(234, 179, 8)";
                            yellowArr.push(inputCurrLet);
                        }
                    }   
                }
                else
                {
                    tiles[secondKey].style.backgroundColor = "rgb(58, 58, 60)";
                    for (var buttonIdx = 0; buttonIdx < buttons.length; buttonIdx++)
                    {
                        if(buttons[buttonIdx].classList.contains(Lower(inputCurrLet)) && !(greenArr.includes(inputCurrLet) || yellowArr.includes(inputCurrLet)))
                        {
                            buttons[buttonIdx].style.backgroundColor = "rgb(58, 58, 60)";
                        }
                    }     
                }
            }
        }
    }
    if(rowCount == 5 && correctNum != 5){return -1; }
    return correctNum;
    
}

function prepare()
{
    document.getElementsByClassName("retry").textContent = "SIFIRLA";
    rowCount = 0;
    currentRow = document.getElementsByClassName("row")[rowCount];
    clearScreen();
    
    main_word = Upper(wordArray[Math.floor( Math.random() * wordArray.length )]);
    
    idxDict = createIdxDict(main_word);
    occDict = createOccDict(main_word);    
    revDict = createRevDict(main_word);    

}

function play()
{
    if(!gameOver)
    {
        var userInput = "";

        var tiles = currentRow.getElementsByClassName("tile");


        for(var i = 0; i < tiles.length; i++)
        {
            userInput += tiles[i].textContent; 
        }

        inputIdxDict = createIdxDict(userInput);
        inputOccDict = createOccDict(userInput);
        inputRevDict = createRevDict(userInput);

        switch(checkInput(userInput)) {
            case 1:
                console.log("Input must have 5 letters in it...");
                break;
            case 2:
                console.log("Your input has non-alphabetic characters in it...");
                break;
            case 3:
                if(!gameOver)
                {
                    
                    if(wordArray.includes(Lower(userInput)))
                    {
                        var result = checkIdx2(inputOccDict, idxDict, occDict, inputRevDict, revDict);
                        currentRow = rows[++rowCount];
                        if(result == userInput.length)
                        {
                            document.getElementsByClassName("message")[0].textContent = `Tebrikler. Kazandın`;
                            gameOver=true;
                        }
                        else if(result == -1)
                        {
                            document.getElementsByClassName("message")[0].textContent = `Kaybettin. Gizli kelime ${main_word} idi`
                            gameOver=true;
                        }
                        if(gameOver){document.getElementsByClassName("retry")[0].textContent = "Tekrar Oyna";}
                    }
                    else
                    {
                        document.getElementsByClassName("message")[0].textContent = `Listemizde \"${userInput}\" kelimesi yok`;
                    }  
                    break;
                }
            }
    }
}

addEventListener("DOMContentLoaded", (event) => {
    
    // MAIN

    // Adding interaction with keyboard
    document.body.addEventListener("keydown", (e)=>{
        if(!gameOver)
        {
            if(e.key === "Enter"){play();}
            else if(e.key === "Backspace"){changeKeyboard(e.key)}
            else if(e.key.length == 1 && Alpha(e.key)){changeKeyboard(e.key);}
        }
        
    });
    
    rows = document.getElementsByClassName("row");
    buttons = document.getElementsByClassName("kb-button")
    // console.log("    " + rows.length);
    prepare(); // start running
    // console.log(document.getElementsByClassName("message")[0].textContent);

});