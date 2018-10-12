TYPE=VIEW
query=select `b`.`id` AS `betId`,`b`.`type` AS `type`,`b`.`playedId` AS `playedId`,`b`.`uid` AS `uid`,`b`.`username` AS `username`,`b`.`actionNo` AS `actionNo`,`b`.`actionTime` AS `actionTime`,`l`.`info` AS `info`,`l`.`liqType` AS `liqType`,`l`.`fcoin` AS `fcoin` from (`xingcai`.`blast_coin_log` `l` join `xingcai`.`blast_bets` `b`) where ((`b`.`id` = `l`.`extfield0`) and (`b`.`isDelete` = 0) and (`b`.`lotteryNo` = \'\') and (`l`.`liqType` between 101 and 102))
md5=f9d5f20ed9d02f30f5fa9fa9a6baf4b6
updatable=1
algorithm=0
definer_user=root
definer_host=localhost
suid=1
with_check_option=0
timestamp=2018-03-27 06:54:49
create-version=1
source=select `b`.`id` AS `betId`,`b`.`type` AS `type`,`b`.`playedId` AS `playedId`,`b`.`uid` AS `uid`,`b`.`username` AS `username`,`b`.`actionNo` AS `actionNo`,`b`.`actionTime` AS `actionTime`,`l`.`info` AS `info`,`l`.`liqType` AS `liqType`,`l`.`fcoin` AS `fcoin` from (`blast_coin_log` `l` join `blast_bets` `b`) where ((`b`.`id` = `l`.`extfield0`) and (`b`.`isDelete` = 0) and (`b`.`lotteryNo` = \'\') and (`l`.`liqType` between 101 and 102))
client_cs_name=utf8
connection_cl_name=utf8_general_ci
view_body_utf8=select `b`.`id` AS `betId`,`b`.`type` AS `type`,`b`.`playedId` AS `playedId`,`b`.`uid` AS `uid`,`b`.`username` AS `username`,`b`.`actionNo` AS `actionNo`,`b`.`actionTime` AS `actionTime`,`l`.`info` AS `info`,`l`.`liqType` AS `liqType`,`l`.`fcoin` AS `fcoin` from (`xingcai`.`blast_coin_log` `l` join `xingcai`.`blast_bets` `b`) where ((`b`.`id` = `l`.`extfield0`) and (`b`.`isDelete` = 0) and (`b`.`lotteryNo` = \'\') and (`l`.`liqType` between 101 and 102))
