# Baixar Imagem do debian coma tag stable-slim
docker pull debian:stable-slim

# Cria e executa Container no modo iterativo rodar o comando cat /etc/*-release,
# que vai retornar os dados da distribuição Debian
docker run -it debian:stable-slim
<< STRING 
    root@005cd45250d1:/# cat /etc/*-release
    PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
    NAME="Debian GNU/Linux"
    VERSION_ID="11"
    VERSION="11 (bullseye)"
    VERSION_CODENAME=bullseye
    ID=debian
    HOME_URL="https://www.debian.org/"
    SUPPORT_URL="https://www.debian.org/support"
    BUG_REPORT_URL="https://bugs.debian.org/"
    root@005cd45250d1:/# exit
    exit

STRING

# Lista containers da máquina
docker container ls -a
<< STRING 
CONTAINER ID   IMAGE                COMMAND     CREATED              STATUS                      PORTS     NAMES
005cd45250d1   debian:stable-slim   "bash"      About a minute ago   Exited (0) 25 seconds ago             youthful_borg
21e7f4b388d6   alpine:3.14          "/bin/sh"   4 hours ago          Exited (0) 4 hours ago                meu-container
STRING

# Inicia container pelo nome que tem a image do debian
docker start youthful_borg
# Note que ao listar os containers ele mudou o status para Up
docker container ls -a
<< STRING
CONTAINER ID   IMAGE                COMMAND     CREATED         STATUS                   PORTS     NAMES
005cd45250d1   debian:stable-slim   "bash"      2 minutes ago   Up 4 seconds                       youthful_borg
21e7f4b388d6   alpine:3.14          "/bin/sh"   4 hours ago     Exited (0) 4 hours ago             meu-container
c4a4306365f8   hello-world          "/hello"    9 hours ago     Exited (0) 9 hours ago             sharp_mahavira
STRING

# Attach é usado para retomar um container startado anteriormente
# e como anteriormente foi no modo interativo, podemos retomar seu terminal
docker attach youthful_borg
<< STRING
root@005cd45250d1:/# cat /etc/debian_version 
11.3
root@005cd45250d1:/# exit
exit
STRING

# Remove o container que foi especificado
docker rm youthful_borg
docker container ls -a
<< STRING
O container já não é mais listado
CONTAINER ID   IMAGE         COMMAND     CREATED       STATUS                   PORTS     NAMES
21e7f4b388d6   alpine:3.14   "/bin/sh"   4 hours ago   Exited (0) 4 hours ago             meu-container
c4a4306365f8   hello-world   "/hello"    9 hours ago   Exited (0) 9 hours ago             sharp_mahavira
STRING

# Cria e executa de modo interativo em modo 'Cleanup', a imagem andrius/ascii-patrol
# Cleanup -> após a execução o container é removido
docker run -it --rm andrius/ascii-patrol
docker container ls -a
<< STRING
CONTAINER ID   IMAGE         COMMAND     CREATED       STATUS                   PORTS     NAMES
21e7f4b388d6   alpine:3.14   "/bin/sh"   5 hours ago   Exited (0) 5 hours ago             meu-container
c4a4306365f8   hello-world   "/hello"    9 hours ago   Exited (0) 9 hours ago             sharp_mahavira
STRING