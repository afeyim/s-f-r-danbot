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
