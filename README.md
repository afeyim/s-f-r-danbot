# Discord Botu – Node.js & Discord.js v14

Bu proje, `Node.js` ve `Discord.js` v14 kullanılarak geliştirilmiş modüler bir Discord botudur. Komutlar `commands` klasöründe ayrı dosyalar halinde tutulur ve `.env` dosyası ile token güvenliği sağlanır.




# 📂 Proje Yapısı
/project


 ├─ ```index.js```          Botun ana dosyası            
 ├─ ```commands/```           Komutların bulunduğu klasör           
 │   └─ ```ping.js```         Örnek komut             
 ├─ ```package.json```        NPM bağımlılıkları     
 ├─ ```package-lock.json```     
 └─ ```.env```                Gizli bot token'ı





 # ⚡ Özellikler
 1.Modüler komut sistemi                    
 2.```.env``` ile güvenli token yönetimi                  
 3.Basit mesaj tabanlı komut desteği ```!ping```                                                        
 4.Kolay genişletilebilir yapı                 




 # 🛠 Kurulum ve Başlatma
 Evet botumuzun herşeyi bitti ve şimdi gerekli kurulumları yapıp başlatıcaz
## 1️⃣ Node.js ve npm Kurulumu
```
# Node.js ve npm sürümünü kontrol et
node -v
npm -v
```
### Node.js >=16 sürümü gereklidir.


## 2️⃣ Projeyi Klonla
Projenizi kendi bilgisayarınıza klonlamak için aşağıdaki adımları takip edin:
```bash 
# GitHub deposunu klonlayın
git clone https://github.com/afeyim/s-f-r-danbot.git

# Proje klasörüne girin
cd s-f-r-danbot
```
Bu komutlar:
1.GitHub reposunu bilgisayarınıza indirir.                   
2.```cd``` komutu ile proje klasörüne geçmenizi sağlar.               






## 4️⃣ .env Dosyasını Doldur

```
BOT_TOKEN=buraya_bot_tokeninizi_yazın
```

## 5️⃣ Botu Çalıştır

```
node index.js
```
1.Konsola ```[BotAdı] aktif ve hazır!``` mesajı geldiğinde bot Discord sunucunuzda aktif olur.                            
2.Örnek komutu test etmek için sunucuda ```!ping``` yazabilirsiniz. Bot ```“Pong!”``` ile cevap verir.                             




# 📝 Komut Eklemek

1.commands klasörüne yeni bir .js dosyası oluştur:                                          

```
touch commands/hello.js
```
2.İçine örnek komut kodunu ekle:                                      

```
// commands/hello.js
module.exports = {
    name: 'hello',
    description: 'Merhaba komutu!',
    execute(message, args) {
        message.channel.send(`Merhaba, ${message.author.username}!`);
    }
};
```
3.```index.js``` otomatik olarak komutu yükler, ekstra ayar yapmanıza gerek yok.      






# 🌐 Gelecek Özellikler (Opsiyonel)
- Slash komut desteği                      
- Otomatik rol ve moderasyon sistemi
- Seviye / XP sistemi / Oyun sistemi
- Veri tabanı entegrasyonu (MongoDB, SQLite)














































# 📚 Kaynaklar
- [Discord.js Resmi Dokümantasyon](https://discord.js.org/)                                        
- [Node.js Resmi Dokümantasyon](https://nodejs.org/)                                   
