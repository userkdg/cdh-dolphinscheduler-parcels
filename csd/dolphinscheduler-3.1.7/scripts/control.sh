#!/bin/sh
set -x

export DS_HOME=/opt/cloudera/parcels/DS/lib/dolphinscheduler
CMD=$1

locateJava() {
  echo
   # export JAVA_HOME=/usr/java/latest
    echo "Changing Java Home to: $JAVA_HOME"
  export JAVA="$JAVA_HOME/bin/java"
  echo "Changing Java to: $JAVA"
    echo
}

config() {
   source $CONF_DIR/ds-conf.properties

   # dbhost : localhost:3306
   echo "dbhost: $dbhost"
   echo "dbname: $dbname"
   echo "username: $username"
   echo "password: $password"
   echo "zookeeper_server: $zookeeper_server"
   echo "masters: $masters"
   echo "workers: $workers"
   echo "alertServer: $alertServer"
   echo "apiServers: $apiServers"
   echo "install_path: $install_path"
   echo "api_server_port: $api_server_port"
   echo "ips: $ips"
   spring_datasource_url="jdbc:mysql://$dbhost/$dbname?useUnicode=true&characterEncoding=UTF-8\&useSSL=false\&useTimezone=true\&serverTimezone=GMT%2B8"
   registry_zookeeper_connect_string="$zookeeper_server"


   database="mysql"

   spring_cache_type="none"
   spring_jackson_time_zone="Asia/Shanghai"
   master_fetch_command_num=50

   registry_type="zookeeper"


   hadoop_home="/opt/soft/hadoop"
   hadoop_conf_dir="/opt/soft/hadoop/etc/hadoop"
   spark_home1="/opt/soft/spark1"
   spark_home2="/opt/soft/spark2"
   python_home="/opt/soft/python"
   hive_home="/opt/soft/hive"
   flink_home="/opt/soft/flink"
   datax_home="/opt/soft/datax"
   seatunnel_home="/opt/soft/seatunnel"
   chunjun_home="/opt/soft/chunjun"

   path='$HADOOP_HOME/bin:$SPARK_HOME1/bin:$SPARK_HOME2/bin:$PYTHON_HOME/bin:$JAVA_HOME/bin:$HIVE_HOME/bin:$FLINK_HOME/bin:$DATAX_HOME/bin:$SEATUNNEL_HOME/bin:$CHUNJUN_HOME/bin:$PATH'


   ssh_port=22
   deployUser="dolphinscheduler"
   zkRoot="/dolphinscheduler"

   # JAVA_HOME, will use it to start DolphinScheduler server
   sed -i  "s#JAVA_HOME.*#JAVA_HOME=\"$JAVA_HOME\"#g" $DS_HOME/bin/env/dolphinscheduler_env.sh
   # Database related configuration, set database type, username and password
   sed -i  "s#DATABASE.*#DATABASE=\"${database}\"#g" $DS_HOME/bin/env/dolphinscheduler_env.sh
   sed -i  "s#SPRING_PROFILES_ACTIVE.*#SPRING_PROFILES_ACTIVE=\${DATABASE}" $DS_HOME/bin/env/dolphinscheduler_env.sh
   sed -i  "s#SPRING_DATASOURCE_URL.*#SPRING_DATASOURCE_URL=\"$spring_datasource_url\"#g" $DS_HOME/bin/env/dolphinscheduler_env.sh
   sed -i  "s#SPRING_DATASOURCE_USERNAME.*#SPRING_DATASOURCE_USERNAME=\"$username\"#g" $DS_HOME/bin/env/dolphinscheduler_env.sh
   sed -i  "s#SPRING_DATASOURCE_PASSWORD.*#SPRING_DATASOURCE_PASSWORD=\"$password\"#g" $DS_HOME/bin/env/dolphinscheduler_env.sh
   # DolphinScheduler server related configuration
   sed -i  "s#SPRING_CACHE_TYPE.*#SPRING_CACHE_TYPE=\"$spring_cache_type\"#g" $DS_HOME/bin/env/dolphinscheduler_env.sh
   sed -i  "s#SPRING_JACKSON_TIME_ZONE.*#SPRING_JACKSON_TIME_ZONE=\"$spring_jackson_time_zone\"#g" $DS_HOME/bin/env/dolphinscheduler_env.sh
   sed -i  "s#MASTER_FETCH_COMMAND_NUM.*#MASTER_FETCH_COMMAND_NUM=$master_fetch_command_num#g" $DS_HOME/bin/env/dolphinscheduler_env.sh
   # Registry center configuration, determines the type and link of the registry center
   sed -i  "s#REGISTRY_TYPE.*#REGISTRY_TYPE=\"$registry_type#g" $DS_HOME/bin/env/dolphinscheduler_env.sh
   sed -i  "s#REGISTRY_ZOOKEEPER_CONNECT_STRING.*#REGISTRY_ZOOKEEPER_CONNECT_STRING=\"$registry_zookeeper_connect_string\"#g" $DS_HOME/bin/env/dolphinscheduler_env.sh
   # Tasks related configurations, need to change the configuration if you use the related tasks.
   sed -i  "s#HADOOP_HOME.*#HADOOP_HOME=\"$hadoop_home#g" $DS_HOME/bin/env/dolphinscheduler_env.sh
   sed -i  "s#HADOOP_CONF_DIR.*#HADOOP_CONF_DIR=\"$hadoop_conf_dir#g" $DS_HOME/bin/env/dolphinscheduler_env.sh
   sed -i  "s#SPARK_HOME1.*#SPARK_HOME1=\"$spark_home1#g" $DS_HOME/bin/env/dolphinscheduler_env.sh
   sed -i  "s#SPARK_HOME2.*#SPARK_HOME2=\"$spark_home2#g" $DS_HOME/bin/env/dolphinscheduler_env.sh
   sed -i  "s#PYTHON_HOME.*#PYTHON_HOME=\"$python_home#g" $DS_HOME/bin/env/dolphinscheduler_env.sh
   sed -i  "s#HIVE_HOME.*#HIVE_HOME=\"$hive_home#g" $DS_HOME/bin/env/dolphinscheduler_env.sh
   sed -i  "s#FLINK_HOME.*#FLINK_HOME=\"$flink_home#g" $DS_HOME/bin/env/dolphinscheduler_env.sh
   sed -i  "s#DATAX_HOME.*#DATAX_HOME=\"$datax_home#g" $DS_HOME/bin/env/dolphinscheduler_env.sh
   sed -i  "s#SEATUNNEL_HOME.*#SEATUNNEL_HOME=\"$seatunnel_home#g" $DS_HOME/bin/env/dolphinscheduler_env.sh
   sed -i  "s#CHUNJUN_HOME.*#CHUNJUN_HOME=\"$chunjun_home#g" $DS_HOME/bin/env/dolphinscheduler_env.sh

   sed -i  "s#PATH=.*#PATH=\"$path#g" $DS_HOME/bin/env/dolphinscheduler_env.sh

   # ---------------------------------------------------------
   # INSTALL MACHINE
   # ---------------------------------------------------------
   sed -i  "s#ips.*#ips=\"$ips\"#g" $DS_HOME/bin/env/install_env.sh
   sed -i  "s#sshPort.*#sshPort=$ssh_port#g" $DS_HOME/bin/env/install_env.sh
   sed -i  "s#masters.*#masters=\"$masters\"#g" $DS_HOME/bin/env/install_env.sh
   sed -i  "s#workers.*#workers=\"$workers\"#g" $DS_HOME/bin/env/install_env.sh
   sed -i  "s#alertServer.*#alertServer=\"$alertServer\"#g" $DS_HOME/bin/env/install_env.sh
   sed -i  "s#apiServers.*#apiServers=\"$apiServers\"#g" $DS_HOME/bin/env/install_env.sh
   sed -i  "s#installPath=.*#installPath=\"$install_path\"#g" $DS_HOME/bin/env/install_env.sh
   sed -i  "s#deployUser.*#deployUser=\"$deployUser\"#g" $DS_HOME/bin/env/install_env.sh
   sed -i  "s#zkRoot.*#zkRoot=\"$zkRoot\"#g" $DS_HOME/bin/env/install_env.sh


   # ---------------------------------------------------------
   # Service Configuration
   # ---------------------------------------------------------
   sed -i  "s#data.basedir.path.*#data.basedir.path=\"$data_basedir_path\"#g" $DS_HOME/api-server/conf/common.properties
   sed -i  "s#resource.view.suffixs.*#resource.view.suffixs=\"$resource_view_suffixs\"#g" $DS_HOME/api-server/conf/common.properties
   sed -i  "s#resource.storage.type.*#resource.storage.type=\"$resource_storage_type\"#g" $DS_HOME/api-server/conf/common.properties
   sed -i  "s#resource.storage.upload.base.path.*#resource.storage.upload.base.path=\"$resource_storage_upload_base_path\"#g" $DS_HOME/api-server/conf/common.properties
   sed -i  "s#resource.hdfs.root.user.*#resource.hdfs.root.user=\"$resource_hdfs_root_user\"#g" $DS_HOME/api-server/conf/common.properties
   sed -i  "s#resource.hdfs.fs.defaultFS.*#resource.hdfs.fs.defaultFS=\"$resource_hdfs_fs_defaultFS\"#g" $DS_HOME/api-server/conf/common.properties
   sed -i  "s#resource.manager.httpaddress.port.*#resource.manager.httpaddress.port=\"$resource_manager_httpaddress_port\"#g" $DS_HOME/api-server/conf/common.properties
   sed -i  "s#yarn.resourcemanager.ha.rm.ids.*#yarn.resourcemanager.ha.rm.ids=\"$yarn_resourcemanager_ha_rm_ids\"#g" $DS_HOME/api-server/conf/common.properties
   sed -i  "s#yarn.application.status.address.*#yarn.application.status.address=\"$yarn_application_status_address\"#g" $DS_HOME/api-server/conf/common.properties
   sed -i  "s#yarn.job.history.status.address.*#yarn.job.history.status.address=\"$yarn_job_history_status_address\"#g" $DS_HOME/api-server/conf/common.properties
   sed -i  "s#data-quality.jar.name.*#data-quality.jar.name=\"$data_quality_jar_name\"#g" $DS_HOME/api-server/conf/common.properties
   # use sudo or not, if set true, executing user is tenant user and deploy user needs sudo permissions; if set false, executing user is the deploy user and doesn't need sudo permissions
   if [ "$sudo_enable" = "true" ];then
      sed -i  "s#sudo.enable.*#sudo.enable=true#g" $DS_HOME/api-server/conf/common.properties
   fi
   if [ "$setTaskDirToTenant" = "true" ];then
      sed -i  "s#setTaskDirToTenant.enable.*#setTaskDirToTenant.enable=true#g" $DS_HOME/api-server/conf/common.properties
   fi

   cp -p $DS_HOME/api-server/conf/common.properties $DS_HOME/worker-server/conf/common.properties
   cp -p $DS_HOME/api-server/conf/common.properties $DS_HOME/master-server/conf/common.properties
   cp -p $DS_HOME/api-server/conf/common.properties $DS_HOME/alert-server/conf/common.properties

   # 增加软连接
   ln -s $HADOOP_CONF_DIR/core-site.xml $DS_HOME/api-server/conf/core-site.xml
   ln -s $HADOOP_CONF_DIR/hdfs-site.xml $DS_HOME/api-server/conf/hdfs-site.xml
   ln -s $HADOOP_CONF_DIR/core-site.xml $DS_HOME/master-server/conf/core-site.xml
   ln -s $HADOOP_CONF_DIR/hdfs-site.xml $DS_HOME/master-server/conf/hdfs-site.xml
   ln -s $HADOOP_CONF_DIR/core-site.xml $DS_HOME/worker-server/conf/core-site.xml
   ln -s $HADOOP_CONF_DIR/hdfs-site.xml $DS_HOME/worker-server/conf/hdfs-site.xml

   # 其他配置 修改相应的配置文件 不进行替换
}

init() {
   echo "init"
   config
   locateJava
   #sh $DS_HOME/script/scp-hosts.sh
   if [ ! -d $install_path ];then
    sudo mkdir -p $install_path
   fi
   \cp -rf $DS_HOME/* $install_path
}
 
start() {
	echo "Running DS"
   sh $install_path/bin/dolphinscheduler-daemon-cdh.sh stop $server_name;
   exec sh $install_path/bin/dolphinscheduler-daemon-cdh.sh start $server_name;
}
 
stop() {
    echo "stop DS"
   sh $install_path/bin/dolphinscheduler-daemon-cdh.sh stop $server_name;
}
 
 
init

case "$1" in
    start)
        start
        ;;
        stop)
                stop
                ;;
    restart)
                stop
        start
                ;;
    *)
        echo "Usage DS {start|stop|restart}"
        exit 2
        ;;
esac
